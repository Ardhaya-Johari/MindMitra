@echo off
REM Activate Python virtual environment
call venv\Scripts\activate

REM Start FastAPI backend in a new terminal
start cmd /k "cd backend && uvicorn main:app --reload"

REM Start React frontend in another terminal
start cmd /k "cd frontend && npm start"

echo MindMitra backend and frontend are starting...
pause

