import { useEffect, useState } from "react";
import axios from "axios";

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchEntries = async () => {
    const res = await axios.get("http://localhost:8000/journal/");
    setEntries(res.data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const addEntry = async () => {
    if (!title || !content) return;
    await axios.post("http://localhost:8000/journal/", { title, content });
    setTitle("");
    setContent("");
    fetchEntries();
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg h-96 flex flex-col">
      <h2 className="font-bold text-lg mb-2 text-blue-500">Journal</h2>
      <div className="flex-1 overflow-y-auto mb-2">
        {entries.map((entry) => (
          <div key={entry.id} className="mb-2 p-2 border-b border-gray-300 dark:border-gray-600">
            <p className="font-semibold">{entry.title}</p>
            <p className="text-sm">{entry.content}</p>
            <span className="text-xs text-gray-500">{entry.mood}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="mb-2 p-2 rounded border border-gray-300 dark:border-gray-600"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="mb-2 p-2 rounded border border-gray-300 dark:border-gray-600"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={addEntry}>
        Add Entry
      </button>
    </div>
  );
}
