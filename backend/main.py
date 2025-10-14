from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import chatbot, journal, mood, support, auth
from app.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(title="MindMitra API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chatbot.router)
app.include_router(journal.router)
app.include_router(mood.router)
app.include_router(support.router)
app.include_router(auth.router)

@app.get("/")
def home():
    return {"message":"MindMitra API running 🚀"}
