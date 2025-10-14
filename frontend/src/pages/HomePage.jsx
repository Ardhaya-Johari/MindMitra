import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link
        to="/chatbot"
        className="bg-blue-100 dark:bg-blue-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
      >
        <h2 className="text-xl font-bold mb-2 text-blue-500 dark:text-white">Chatbot</h2>
        <p className="text-center text-gray-700 dark:text-gray-200">
          Talk to MindMitra. Get empathetic, sentiment-aware responses.
        </p>
      </Link>

      <Link
        to="/mood-analytics"
        className="bg-green-100 dark:bg-green-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
      >
        <h2 className="text-xl font-bold mb-2 text-green-600 dark:text-white">Mood Analytics</h2>
        <p className="text-center text-gray-700 dark:text-gray-200">
          See your mood trends over time. Track your emotional journey.
        </p>
      </Link>

      <Link
        to="/journal"
        className="bg-yellow-100 dark:bg-yellow-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
      >
        <h2 className="text-xl font-bold mb-2 text-yellow-600 dark:text-white">Journal</h2>
        <p className="text-center text-gray-700 dark:text-gray-200">
          Write daily entries. Record your thoughts and feelings.
        </p>
      </Link>

      <Link
        to="/support"
        className="bg-purple-100 dark:bg-purple-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
      >
        <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-white">Support</h2>
        <p className="text-center text-gray-700 dark:text-gray-200">
          Access motivational tips, relaxation advice, and helpful messages.
        </p>
      </Link>
    </div>
  );
}
