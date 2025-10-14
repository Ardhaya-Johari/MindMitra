from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import MoodLog

router = APIRouter(prefix="/mood", tags=["Mood"])

@router.get("/trends")
def get_mood_trends(db: Session = Depends(get_db)):
    moods = db.query(MoodLog).order_by(MoodLog.timestamp.asc()).all()
    return [{"date": m.timestamp.strftime("%Y-%m-%d"), "mood": m.mood} for m in moods]

@router.get("/latest")
def get_latest_mood(db: Session = Depends(get_db)):
    latest = db.query(MoodLog).order_by(MoodLog.timestamp.desc()).first()
    if latest:
        return {"mood": latest.mood, "confidence": latest.confidence, "timestamp": latest.timestamp}
    return {"mood":"neutral","confidence":"0","timestamp":None}
