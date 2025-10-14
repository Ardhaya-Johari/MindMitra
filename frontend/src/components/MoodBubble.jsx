import { useEffect, useState } from "react";
import axios from "axios";

export default function MoodBubble() {
  const [mood, setMood] = useState("neutral");

  useEffect(() => {
    const fetchMood = async () => {
      try {
        const res = await axios.get("http://localhost:8000/mood/latest");
        setMood(res.data.mood || "neutral");
      } catch (err) {
        console.log(err);
      }
    };
    fetchMood();
    const interval = setInterval(fetchMood, 5000);
    return () => clearInterval(interval);
  }, []);

  const colors = {
    positive: "bg-green-400",
    negative: "bg-red-400",
    neutral: "bg-yellow-400",
  };

  return (
    <div
      className={`fixed top-20 right-4 p-4 rounded-full text-white font-bold shadow-lg animate-bounce ${colors[mood]} z-50`}
    >
      {mood.toUpperCase()}
    </div>
  );
}
