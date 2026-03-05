import pandas as pd

def load_dataset(path):
    df = pd.read_csv(path)
    return df

if __name__ == "__main__":
    print("SentinelAI Feature Engineering Module Initialized")