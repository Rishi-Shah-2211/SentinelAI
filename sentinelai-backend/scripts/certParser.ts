import fs from "fs";
import path from "path";
import axios from "axios";

const BACKEND_URL = "https://sentinelai-backend-uzvh.onrender.com/api/activity";
interface ActivityEvent {
  userId: string;
  action: string;
  timestamp: string;
}

async function sendActivity(event: ActivityEvent) {
  try {
    await axios.post(BACKEND_URL, event);
    console.log("Sent:", event.action);
  } catch {
    console.log("Failed sending event");
  }
}

async function replayDataset() {
  const filePath = path.join(__dirname, "../cert_dataset/generated.csv");

  const content = fs.readFileSync(filePath, "utf8");

  const lines = content.split("\n").slice(1); // skip header

  console.log(`Replaying ${lines.length} events...`);

  for (const line of lines) {
    if (!line.trim()) continue;

    const [timestamp, user, action] = line.split(",");

    const event: ActivityEvent = {
      userId: user,
      action: action,
      timestamp: timestamp,
    };

    await sendActivity(event);

    // slight delay to simulate real activity
    await new Promise((r) => setTimeout(r, 20));
  }

  console.log("Dataset replay completed");
}

replayDataset();