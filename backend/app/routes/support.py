from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/support", tags=["Support"])

class SupportMessage(BaseModel):
    title: str
    content: str

support_data: List[SupportMessage] = [
    SupportMessage(title="Motivation", content="You've survived 100% of your worst days. Keep going! 🌅"),
    SupportMessage(title="Relaxation Tips", content="Take 5 deep breaths, stretch, or meditate for 10 minutes."),
    SupportMessage(title="Seek Help", content="Talking to a counselor or trusted friend can make a huge difference. You're not alone 💙")
]

@router.get("/")
def get_support_messages():
    return support_data
