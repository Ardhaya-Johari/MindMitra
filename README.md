# 🧠 MindMitra: AI-Powered Mental Health Companion

> **A mental health support web app built using FastAPI and React.js that detects user emotions and provides empathetic, AI-driven responses.**

---

## 📑 Table of Contents
- [Overview & Vision](#overview--vision)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Connect with Me](#connect-with-me)
- [Made By](#made-by)

---

## 🌈 Overview & Vision
**MindMitra** is an AI-powered mental health companion designed to support students and individuals experiencing stress, anxiety, or loneliness.  
It creates a safe digital space to express emotions through natural conversation while analyzing the user’s mood and offering personalized, supportive responses.  

**Vision:**  
To leverage artificial intelligence for emotional wellness — making mental health support accessible, empathetic, and stigma-free.

---

## 💡 Core Features
✅ **AI Chatbot:** Provides empathetic and therapeutic replies based on user sentiment.  
✅ **Mood Analytics:** Tracks emotional trends and visualizes data over time.  
✅ **Journal System:** Allows users to document daily reflections and auto-detect mood from entries.  
✅ **Support Resources:** Offers motivational messages and self-help tips.  
✅ **Dark/Light Mode:** Enhances user comfort with dynamic theming.  
✅ **User Authentication:** Secure login and registration (planned).  

---

## ⚙️ Tech Stack
**Frontend:** React.js, Tailwind CSS, Framer Motion, Chart.js, Axios  
**Backend:** FastAPI (Python), TextBlob (sentiment analysis), SQLAlchemy  
**Database:** SQLite / PostgreSQL  
**AI API:** Google Gemini / Custom Sentiment Model  
**Deployment:** Uvicorn, Vercel (Frontend)  

---

## 🧩 Project Structure
```
MindMitra/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   │   ├── chatbot.py
│   │   │   ├── journal.py
│   │   │   ├── mood.py
│   │   │   ├── support.py
│   │   │   └── auth.py
│   │   ├── database.py
│   │   └── models.py
|   ├──requirements.txt
│   └── main.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DarkModeToggle.jsx
│   │   │   ├── Navbar.jsx
|   |   |   ├── MoodBubble.jsx
│   │   │   ├── Chatbot.jsx
│   │   │   ├── MoodAnalytics.jsx
│   │   │   ├── Journal.jsx
│   │   │   └── Support.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── ChatbotPage.jsx
│   │   │   ├── MoodAnalyticsPage.jsx
│   │   │   ├── JournalPage.jsx
│   │   │   └── SupportPage.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have installed:
- Node.js and npm
- Python 3.10+
- Virtual environment (venv)

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/Scripts/activate
pip install -r requirements.txt
uvicorn main:app --reload
```
Backend runs on → `http://localhost:8000`

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend runs on → `http://localhost:3000`

### Run Both Together (optional)
You can also create a batch file to start both frontend and backend simultaneously.

1️⃣ Clone the repo  

```bash
git clone https://github.com/your-username/MindMitra.git
```

2️⃣ Navigate to project folder  

```bash
cd MindMitra
```

3️⃣ Install dependencies  

```bash
npm install
```

4️⃣ Start development server  

```bash
npm start
```
---

## 🤝 Contribution Guidelines

We welcome all contributions! To contribute:
1. Fork the repository 🍴  
2. Create a new branch: `git checkout -b feature-name`  
3. Commit your changes: `git commit -m "Added new feature"`  
4. Push to your branch: `git push origin feature-name`  
5. Create a Pull Request ✨  

Please ensure your code follows proper linting and style conventions.

---

## 📜 License

This project is licensed under the **MIT License** — you’re free to use, modify, and distribute it.

---

## 🌐 Connect with Me

👤 **Ardhaya Johari**  
💼 [LinkedIn](https://www.linkedin.com/in/ardhaya-johari-819275321/)  
💻 [GitHub](https://github.com/Ardhaya-Johari)  
📧 ardhayasaxena3897@gmail.com  

---

## ✨ Made By
**Ardhaya Johari**  
*"Building human-centered AI applications with code and compassion."*  
