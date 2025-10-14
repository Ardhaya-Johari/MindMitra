import { useEffect, useState } from "react";
import axios from "axios";
import { FaBrain, FaSmile, FaHandHoldingHeart, FaBook } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Support() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSupport = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/support/");
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching support messages:", err);
        setError(true);
      }
    };
    fetchSupport();
  }, []);

  // Fade-in helper
  const FadeIn = ({ children }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
      <div
        ref={ref}
        className={`transition-opacity duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-500 text-center">
        🌱 Your Mind Matters
      </h1>

      {/* Static motivational text */}
      <div className="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
        <FadeIn>
          <p className="text-lg font-semibold">Dear students,</p>
        </FadeIn>

        <FadeIn>
          <p>
            In the pursuit of <b>grades, goals, and greatness</b>, it's easy to forget the most important part of your journey — <b>you</b>. Your mental health is not a luxury; it's a necessity. Just like you care for your body, your mind deserves the same attention, compassion, and care.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="flex items-start gap-2">
            <p>
              Asking for help is not a weakness — it's <b>courage in action</b>. Whether you're feeling overwhelmed, anxious, or simply need someone to talk to, reaching out is a powerful step toward healing and growth. <span className="italic">You are not alone, and you never have to be.</span>
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex items-start gap-2">
            <p className="text-blue-500 font-semibold">
              🎓 Your dreams are valid. Your struggles are real. And your well-being is worth fighting for.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex items-start gap-2">
            <p>
              So take that break. Talk to a counselor. Share with a friend. Journal your thoughts. Breathe deeply. You are allowed to care for yourself — in fact, you must.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <p>Because when your mind is supported, your <b>potential becomes unstoppable</b>.</p>
        </FadeIn>

        <FadeIn>
          <p className="font-semibold">With strength and solidarity,</p>
        </FadeIn>

        <FadeIn>
          <p className="text-lg">Keep growing. Keep glowing. ✨</p>
        </FadeIn>
      </div>

      {/* Dynamic messages from FastAPI */}
      {error ? (
        <FadeIn>
          <p className="mt-6 text-red-500">Failed to load additional support messages.</p>
        </FadeIn>
      ) : (
        messages.length > 0 && (
          <div className="mt-6 space-y-4">
            {messages.map((msg, idx) => (
              <FadeIn key={idx}>
                <div className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <FaSmile className="text-yellow-400" />
                    <p className="font-semibold text-blue-500">{msg.title}</p>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">{msg.content}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        )
      )}
    </div>
  );
}
