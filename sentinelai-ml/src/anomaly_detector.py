import pandas as pd
from sklearn.ensemble import IsolationForest

# Load dataset
data = pd.read_csv("data/user_activity.csv")

# Separate user ids
user_ids = data["user_id"]

# Features for model
features = data.drop(columns=["user_id"])

# Train Isolation Forest
model = IsolationForest(contamination=0.2, random_state=42)
model.fit(features)

# Predict anomalies
data["anomaly"] = model.predict(features)

# Convert to risk scores
data["risk_score"] = model.decision_function(features)

# Mark suspicious users
data["is_suspicious"] = data["anomaly"].apply(lambda x: "YES" if x == -1 else "NO")

print("\nSentinelAI Risk Analysis\n")
print(data[["user_id","risk_score","is_suspicious"]])