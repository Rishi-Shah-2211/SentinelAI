import axios from "axios";

const API_URL = "https://sentinelai-backend-uzvh.onrender.com/api/activity";

const users = ["EMP001", "EMP002", "EMP003", "EMP004"];

const actions = [
  "login",
  "logout",
  "file_upload",
  "file_download",
  "email_send",
  "database_query"
];

function randomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function sendActivity() {
  const event = {
    userId: randomItem(users),
    action: randomItem(actions),
    timestamp: new Date().toISOString()
  };

  try {
    await axios.post(API_URL, event);

    console.log("Activity sent →", event);
  } catch (error: any) {
    console.error("Error sending activity:", error.message);
  }
}

setInterval(sendActivity, 5000);