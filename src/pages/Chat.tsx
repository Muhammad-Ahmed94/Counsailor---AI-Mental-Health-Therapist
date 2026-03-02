import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { sendMessage, resetChat } from "../services/chat.service";
import { SendHorizonal, LogOut, RotateCcw, Bot, Volume2, VolumeX } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "bot",
  content:
    "Hey there 👋 Welcome to Counsailor. I'm here to listen and support you — no judgment, just a safe space.\n\nWhat's on your mind today? How are you feeling right now?",
};

const Chat = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleSpeak = useCallback((text: string, index: number) => {
    // If already speaking this message, stop it
    if (speakingIndex === index) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(null);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.lang = "en-US";

    // Try to find a natural-sounding voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) => v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Samantha")
    );
    if (preferred) utterance.voice = preferred;

    utterance.onend = () => setSpeakingIndex(null);
    utterance.onerror = () => setSpeakingIndex(null);

    setSpeakingIndex(index);
    window.speechSynthesis.speak(utterance);
  }, [speakingIndex]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await sendMessage(trimmed);
      const botMessage: Message = { role: "bot", content: response };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: Message = {
        role: "bot",
        content:
          "I'm having a moment — something went wrong on my end. Could you try sending that again? 💙",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewChat = () => {
    window.speechSynthesis.cancel();
    setSpeakingIndex(null);
    resetChat();
    setMessages([INITIAL_MESSAGE]);
    setInput("");
  };

  const handleLogout = async () => {
    window.speechSynthesis.cancel();
    resetChat();
    await logout();
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen bg-[#0f1a14]">
      {/* Header — dark green tinted */}
      <header className="shrink-0 border-b border-white/8 bg-[#162a1e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Left — Bot identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-primary flex-center shadow-md shadow-green-primary/20">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-base">Counsailor</h1>
              <p className="text-green-300/50 text-xs">AI Therapist • Online</p>
            </div>
          </div>

          {/* Right — User + Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleNewChat}
              className="text-white/40 hover:text-green-300 transition-colors cursor-pointer p-2 rounded-lg hover:bg-white/5"
              title="New Chat"
            >
              <RotateCcw size={18} />
            </button>

            {user?.photoURL && (
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                className="w-9 h-9 rounded-full border-2 border-green-primary/40"
                referrerPolicy="no-referrer"
              />
            )}
            <span className="text-white/60 text-sm hidden sm:block max-w-35 truncate font-medium">
              {user?.displayName || user?.email}
            </span>

            <button
              onClick={handleLogout}
              className="text-white/40 hover:text-red-400 transition-colors cursor-pointer p-2 rounded-lg hover:bg-white/5"
              title="Sign out"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Messages Area — subtle gradient background */}
      <main className="flex-1 overflow-y-auto bg-linear-to-b from-[#0f1a14] to-[#111e16]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-7">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {/* Bot avatar */}
              {msg.role === "bot" && (
                <div className="w-9 h-9 rounded-full bg-green-primary/90 flex-center shrink-0 mt-1 shadow-sm shadow-green-primary/20">
                  <Bot size={17} className="text-white" />
                </div>
              )}

              {/* Message content */}
              <div className="flex flex-col gap-1.5 max-w-[80%]">
                {/* Bubble */}
                <div
                  className={`rounded-2xl px-5 py-3.5 leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-orange-primary text-white rounded-br-md text-base"
                      : "bg-[#1a2e22] text-white/90 rounded-bl-md text-base border border-white/5"
                  }`}
                >
                  {msg.content}
                </div>

                {/* TTS button for bot messages */}
                {msg.role === "bot" && (
                  <button
                    onClick={() => handleSpeak(msg.content, i)}
                    className={`self-start flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                      speakingIndex === i
                        ? "text-orange-primary bg-orange-primary/10"
                        : "text-white/30 hover:text-green-300 hover:bg-white/5"
                    }`}
                    title={speakingIndex === i ? "Stop speaking" : "Listen to response"}
                  >
                    {speakingIndex === i ? (
                      <>
                        <VolumeX size={13} />
                        <span>Stop</span>
                      </>
                    ) : (
                      <>
                        <Volume2 size={13} />
                        <span>Listen</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* User avatar */}
              {msg.role === "user" && user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "You"}
                  className="w-9 h-9 rounded-full shrink-0 mt-1 border-2 border-orange-primary/40"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-9 h-9 rounded-full bg-green-primary/90 flex-center shrink-0 mt-1 shadow-sm shadow-green-primary/20">
                <Bot size={17} className="text-white" />
              </div>
              <div className="bg-[#1a2e22] border border-white/5 rounded-2xl rounded-bl-md px-5 py-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-400/50 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2.5 h-2.5 bg-green-400/50 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2.5 h-2.5 bg-green-400/50 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area — slightly elevated dark green */}
      <footer className="shrink-0 border-t border-white/8 bg-[#162a1e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-end gap-3 bg-[#1a2e22] rounded-2xl px-5 py-3.5 border border-white/10 focus-within:border-green-primary/40 transition-colors shadow-lg shadow-black/20">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What's on your mind..."
              rows={1}
              className="flex-1 bg-transparent text-white text-base placeholder-white/25 resize-none outline-none max-h-30"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`shrink-0 p-2.5 rounded-xl transition-all cursor-pointer ${
                input.trim() && !isLoading
                  ? "bg-orange-primary text-white hover:opacity-90 shadow-md shadow-orange-primary/30"
                  : "bg-white/5 text-white/15"
              }`}
            >
              <SendHorizonal size={20} />
            </button>
          </div>
          <p className="text-white/15 text-xs text-center mt-3">
            Counsailor is an AI companion, not a substitute for professional therapy.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Chat;
