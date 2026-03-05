import pandas as pd
import joblib
from sklearn.ensemble import IsolationForest

# Load dataset
data = pd.read_csv("data/user_activity.csv")

# Prepare features
features = data.drop(columns=["user_id"])

# Train model
model = IsolationForest(
    contamination=0.2,
    random_state=42
)

model.fit(features)

# Save model
joblib.dump(model, "models/anomaly_model.pkl")

print("SentinelAI Model Training Complete")
print("Model saved to models/anomaly_model.pkl")