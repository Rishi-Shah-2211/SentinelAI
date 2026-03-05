import fetch from "node-fetch"

const API_URL =
  "https://sentinelai-backend-uzvh.onrender.com/api/activity"

const users = [
  "EMP001",
  "EMP002",
  "EMP003",
  "EMP004",
  "EMP005",
  "EMP006",
  "EMP007",
  "EMP008",
  "EMP009",
  "EMP010"
]

const actions = [
  "login",
  "file_access",
  "file_download",
  "usb_insert",
  "logout",
  "privilege_escalation",
  "data_exfiltration"
]

function randomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

async function sendActivity() {
  const activity = {
    userId: randomItem(users),
    action: randomItem(actions),
    device: "corporate-laptop",
    location: "office-network"
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(activity)
    })

    const text = await res.text()

    try {
      const json = JSON.parse(text)
      console.log("Activity sent:", json)
    } catch {
      console.log("Server returned non-JSON response:")
      console.log(text)
    }
  } catch (err) {
    console.error("Simulation error:", err)
  }
}

console.log("Starting SentinelAI activity simulation...")

setInterval(sendActivity, 1500)