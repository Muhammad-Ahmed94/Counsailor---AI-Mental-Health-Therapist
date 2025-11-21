# Counsailor - AI Mental Health Therapist

**Counsailor** is an AI-powered mental well-being companion designed to provide a safe, non-judgmental space for users to express their feelings. It utilizes Google's Gemini API for compassionate dialogue and Firebase for secure user management.

## 🚀 Tech Stack

- Frontend: React (v18+), TypeScript

- Styling: Tailwind CSS, Lucide React (Icons)

- Build Tool: Vite

- Backend/Auth: Firebase (Auth & Firestore)

- AI Engine: Google Gemini API

## 🛠️ Local Development Setup

Follow these steps to set up the project folder on your local machine.

1. Initialize the Project

We will use Vite for a fast, modern setup. Open your terminal and run:
``` 
npm create vite@latest counsailor -- --template react-ts
cd counsailor 
```

2. Install Core Dependencies

Install the packages for routing, styling, and icons.
```
npm install react-router-dom axios firebase lucide-react
```

3. Run the Project

Start the development server: ` npm run dev `


Your app should now be running at `http://localhost:5173`

## 🔑 Environment Variables

Create a .env file in the root directory to store your sensitive keys. Never commit this file to GitHub.
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_GEMINI_API_KEY=your_gemini_api_key
