from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import pandas as pd
import joblib

app = FastAPI()

# Load model
model = joblib.load("models/anomaly_model.pkl")


class UserActivity(BaseModel):
    user_id: str
    login_count: int
    after_hours_logins: int
    usb_inserts: int
    file_accesses: int
    email_sent: int


@app.get("/")
def home():
    return {"message": "SentinelAI ML Service Running"}


@app.post("/predict-risk")
def predict_risk(data: List[UserActivity]):

    df = pd.DataFrame([item.dict() for item in data])

    user_ids = df["user_id"]
    features = df.drop(columns=["user_id"])

    anomaly = model.predict(features)
    scores = model.decision_function(features)

    results = []

    for i in range(len(df)):
        risk = "HIGH" if anomaly[i] == -1 else "LOW"

        results.append({
            "user_id": user_ids.iloc[i],
            "risk_score": float(scores[i]),
            "risk_level": risk
        })

    return {"results": results}