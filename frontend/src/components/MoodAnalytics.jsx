import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function MoodAnalytics() {
  const [moodData, setMoodData] = useState({
    labels: [],
    datasets: [
      { label: "Positive", data: [], borderColor: "green", tension: 0.4 },
      { label: "Negative", data: [], borderColor: "red", tension: 0.4 },
    ],
  });
  const [error, setError] = useState(false);

  const fetchMood = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/mood/trends"); // use 127.0.0.1
      const labels = res.data.map((m) => m.date);
      const positive = res.data.map((m) => (m.mood === "positive" ? 1 : 0));
      const negative = res.data.map((m) => (m.mood === "negative" ? 1 : 0));

      setMoodData({
        labels,
        datasets: [
          { label: "Positive", data: positive, borderColor: "green", tension: 0.4 },
          { label: "Negative", data: negative, borderColor: "red", tension: 0.4 },
        ],
      });
      setError(false);
    } catch (err) {
      console.error("Error fetching mood data:", err);
      setError(true);
      // fallback: show empty or static data
      setMoodData({
        labels: ["No Data"],
        datasets: [
          { label: "Positive", data: [0], borderColor: "green", tension: 0.4 },
          { label: "Negative", data: [0], borderColor: "red", tension: 0.4 },
        ],
      });
    }
  };

  useEffect(() => {
    fetchMood();
    const interval = setInterval(fetchMood, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg h-96">
      <h2 className="font-bold text-lg mb-2 text-blue-500">Mood Analytics</h2>
      {error ? (
        <p className="text-gray-700 dark:text-gray-200">
          Unable to load mood data. Please ensure your backend is running.
        </p>
      ) : (
        <Line data={moodData} options={{ responsive: true, plugins: { legend: { labels: { color: "#fff" } } } }} />
      )}
    </div>
  );
}
