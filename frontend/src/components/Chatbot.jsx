import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", message: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/chatbot/", { message: input });
      const botMsg = { sender: "bot", message: res.data.response };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", message: "Oops! Something went wrong. Please try again." },
      ]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-[80vh] flex flex-col">
      <h2 className="text-2xl font-bold text-blue-500 mb-4">Chatbot</h2>
      <div className="flex-1 overflow-y-auto mb-4 flex flex-col">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 p-3 rounded-lg max-w-[80%] break-words
              ${msg.sender === "user"
                ? "bg-blue-100 dark:bg-blue-700 text-black dark:text-white self-end"
                : "bg-gray-200 dark:bg-gray-600 text-black dark:text-white self-start"
              }`}
          >
            {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-l border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}
