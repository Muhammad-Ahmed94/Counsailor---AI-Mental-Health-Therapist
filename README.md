# 🧠 Counsailor — AI Mental Health Therapist

**Counsailor** is a modern, AI-powered mental health companion built with React and Google's Gemini API. It provides a safe, confidential space for users to express their feelings and receive empathetic, therapeutically-informed responses — available 24/7, no appointments needed.

![Home Page](public/hero.png)

---

## ✨ Features

- **🤖 AI Therapist Chat** — Multi-turn conversations powered by Gemini 3 Flash with a custom therapist system prompt (CBT, mindfulness, crisis support)
- **🔐 Google Authentication** — Secure sign-in via Firebase Auth with Google accounts
- **🔊 Text-to-Speech** — Listen to bot responses with one click using the Web Speech API
- **📱 Fully Responsive** — Works seamlessly on desktop, tablet, and mobile
- **🌙 Dark Chat UI** — Green-tinted minimal dark theme for the chat interface
- **🎨 Modern Design** — Clean, premium pages with gradient headers, cards, and animations

## 📸 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section with CTA |
| About | `/about` | Mission, stats bar, feature cards |
| Services | `/services` | 6 service cards, How It Works, CTA banner |
| Pricing | `/pricing` | 3-tier pricing, FAQ accordion |
| Chat | `/chat` | Protected — AI therapist chat interface |

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Auth** | Firebase Authentication (Google) |
| **AI Engine** | Google Gemini API (`@google/genai`) |
| **Routing** | React Router DOM v7 |
| **TTS** | Web Speech API (built-in) |

---

## 🛠️ Local Development Setup

### Prerequisites

- Node.js 18+
- A Firebase project with Google sign-in enabled
- A Gemini API key from [Google AI Studio](https://aistudio.google.com/)

### 1. Clone & Install

```bash
git clone https://github.com/Muhammad-Ahmed94/Counsailor---AI-Mental-Health-Therapist.git
cd Counsailor---AI-Mental-Health-Therapist
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> ⚠️ **Never commit `.env` to Git.** It's already in `.gitignore`.

### 3. Enable Firebase Google Auth

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Navigate to **Authentication → Sign-in method**
3. Enable **Google** as a sign-in provider
4. Add your authorized domain (e.g., `localhost`)

### 4. Run the Dev Server

```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

### 5. Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Navigation with mobile hamburger menu
│   ├── Footer.tsx           # Site-wide footer with quick links
│   ├── PageHeader.tsx       # Reusable gradient page banner
│   └── ProtectedRoute.tsx   # Auth gate with Google sign-in UI
├── config/
│   ├── firebase.config.js   # Firebase initialization + auth exports
│   └── gemini.config.js     # Gemini AI client initialization
├── context/
│   └── AuthContext.tsx       # Global auth state (user, sign-in, logout)
├── pages/
│   ├── Home.tsx              # Landing page with hero section
│   ├── About.tsx             # Mission, stats, feature cards
│   ├── Services.tsx          # Service offerings + How It Works
│   ├── Pricing.tsx           # 3-tier pricing + FAQ accordion
│   └── Chat.tsx              # AI therapist chat interface + TTS
├── services/
│   └── chat.service.ts       # Gemini chat session + system prompt
├── App.tsx                   # Route definitions
├── main.tsx                  # Entry point with AuthProvider
└── index.css                 # Tailwind + custom design tokens
```

---

## 🤖 AI Therapist System Prompt

Counsailor's AI is configured with a detailed system instruction that:

- Uses **CBT, mindfulness, and motivational interviewing** techniques
- **Validates feelings** before offering advice
- Provides **crisis resources** (988 Lifeline) when detecting distress
- Keeps responses **concise and warm** (2-4 paragraphs max)
- **Never diagnoses** — refers to licensed professionals when needed
- Stays **on-topic** (mental health only)

---

## 📜 License

This project is for educational and portfolio purposes.

---

<p align="center">Made with 💚 for mental wellness</p>
