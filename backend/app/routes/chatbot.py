from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import ChatMessage, MoodLog
from textblob import TextBlob
import requests, os
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")

router = APIRouter(prefix="/chatbot", tags=["Chatbot"])

# Fallback responses based on sentiment
FALLBACK_RESPONSES = {
    "positive": [
        "I'm glad to hear that! 😊 Keep it up!",
        "That's wonderful! Remember to cherish these moments.",
        "Awesome! Stay positive and keep smiling!"
    ],
    "neutral": [
        "I hear you. Can you tell me a bit more about how you're feeling?",
        "Okay, let's explore that together.",
        "Thanks for sharing. How does that make you feel?"
    ],
    "negative": [
        "I'm sorry you're feeling that way. 😔 Would you like some tips to feel better?",
        "It’s okay to feel sad sometimes. I'm here to listen.",
        "Take a deep breath. You're not alone in this."
    ]
}

@router.post("/")
def chat(message: dict, db: Session = Depends(get_db)):
    user_text = message.get("message", "")
    
    # Sentiment Analysis
    polarity = TextBlob(user_text).sentiment.polarity
    sentiment = "positive" if polarity > 0 else "negative" if polarity < 0 else "neutral"

    # Try AI API first
    bot_text = None
    try:
        url = "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText"
        payload = {"prompt": {"text": f"Respond empathetically and therapeutically: {user_text}"}, "temperature": 0.7}
        headers = {"Authorization": f"Bearer {API_KEY}"}
        res = requests.post(url, json=payload, headers=headers, timeout=5)
        bot_text = res.json().get("candidates", [{"output": None}])[0]["output"]
    except Exception as e:
        print("AI API failed, using fallback response:", e)

    # Fallback if API fails
    if not bot_text:
        import random
        bot_text = random.choice(FALLBACK_RESPONSES[sentiment])

    # Save messages and mood
    db.add_all([
        ChatMessage(sender="user", message=user_text, sentiment=sentiment),
        ChatMessage(sender="bot", message=bot_text, sentiment=sentiment),
        MoodLog(mood=sentiment, confidence=str(polarity))
    ])
    db.commit()

    return {"response": bot_text, "sentiment": sentiment}
