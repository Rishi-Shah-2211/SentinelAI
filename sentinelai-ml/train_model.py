import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest
import joblib
import os

# -----------------------------
# Generate synthetic training data
# -----------------------------

np.random.seed(42)

records = []

for i in range(1000):

    login_hour = np.random.normal(10, 2)
    actions = np.random.normal(20, 5)
    downloads = np.random.normal(2, 1)

    records.append([
        login_hour,
        actions,
        downloads
    ])

df = pd.DataFrame(records, columns=[
    "login_hour",
    "actions",
    "downloads"
])

# -----------------------------
# Train Isolation Forest model
# -----------------------------

model = IsolationForest(
    n_estimators=100,
    contamination=0.05,
    random_state=42
)

model.fit(df)

# -----------------------------
# Ensure models folder exists
# -----------------------------

os.makedirs("models", exist_ok=True)

# -----------------------------
# Save model
# -----------------------------

joblib.dump(model, "models/anomaly_model.pkl")

print("Model trained successfully.")
print("Saved to models/anomaly_model.pkl")