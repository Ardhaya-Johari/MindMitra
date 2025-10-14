from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Journal
from pydantic import BaseModel
from textblob import TextBlob

router = APIRouter(prefix="/journal", tags=["Journal"])

class JournalCreate(BaseModel):
    title: str
    content: str
    mood: str | None = None

@router.post("/")
def add_journal(entry: JournalCreate, db: Session = Depends(get_db)):
    if not entry.mood:
        polarity = TextBlob(entry.content).sentiment.polarity
        entry.mood = "positive" if polarity > 0 else "negative" if polarity < 0 else "neutral"
    new_entry = Journal(title=entry.title, content=entry.content, mood=entry.mood)
    db.add(new_entry)
    db.commit()
    db.refresh(new_entry)
    return new_entry

@router.get("/")
def get_journals(db: Session = Depends(get_db)):
    return db.query(Journal).order_by(Journal.created_at.desc()).all()
