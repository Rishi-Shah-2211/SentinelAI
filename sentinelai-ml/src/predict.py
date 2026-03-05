import pandas as pd
from risk_engine import calculate_risk_scores

# Load dataset
data = pd.read_csv("data/user_activity.csv")

results = calculate_risk_scores(data)

print("\nSentinelAI Risk Engine Output\n")
print(results)