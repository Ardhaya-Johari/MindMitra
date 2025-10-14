import { Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatbotPage from "./pages/ChatbotPage";
import MoodAnalyticsPage from "./pages/MoodAnalyticsPage";
import JournalPage from "./pages/JournalPage";
import SupportPage from "./pages/SupportPage";
import DarkModeToggle from "./components/DarkModeToggle";

function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Chatbot", path: "/chatbot" },
    { name: "Mood Analytics", path: "/mood-analytics" },
    { name: "Journal", path: "/journal" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-500 dark:text-blue-400">MindMitra</h1>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`hover:text-blue-600 dark:hover:text-blue-300 ${
                location.pathname === link.path
                  ? "font-bold underline text-blue-500 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <DarkModeToggle />
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 p-4 md:p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/mood-analytics" element={<MoodAnalyticsPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </div>
    </>
  );
}
