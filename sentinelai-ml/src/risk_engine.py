import joblib
import pandas as pd

# Load trained model
model = joblib.load("models/anomaly_model.pkl")

def calculate_risk_scores(data):

    user_ids = data["user_id"]
    features = data.drop(columns=["user_id"])

    anomaly = model.predict(features)
    risk_scores = model.decision_function(features)

    results = pd.DataFrame({
        "user_id": user_ids,
        "risk_score": risk_scores,
        "anomaly": anomaly
    })

    results["risk_level"] = results["anomaly"].apply(
        lambda x: "HIGH" if x == -1 else "LOW"
    )

    return results