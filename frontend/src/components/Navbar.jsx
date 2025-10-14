import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 flex space-x-4 fixed w-full z-50 top-0">
      <Link className="text-blue-500 font-bold" to="/">Home</Link>
      <Link className="text-blue-500 font-bold" to="/chatbot">Chatbot</Link>
      <Link className="text-blue-500 font-bold" to="/mood-analytics">Mood Analytics</Link>
      <Link className="text-blue-500 font-bold" to="/journal">Journal</Link>
      <Link className="text-blue-500 font-bold" to="/support">Support</Link>
    </nav>
  );
}
