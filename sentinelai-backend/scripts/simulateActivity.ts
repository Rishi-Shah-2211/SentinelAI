import fetch from "node-fetch"

const API_URL = "http://localhost:5000/api/activity"

const users = ["EMP001", "EMP002", "EMP003", "EMP004"]

const actions = [
  "login",
  "logout",
  "file_download",
  "file_upload",
  "usb_insert",
  "password_change"
]

console.log("Starting SentinelAI activity simulation...")

async function sendActivity() {
  try {
    const userId = users[Math.floor(Math.random() * users.length)]
    const action = actions[Math.floor(Math.random() * actions.length)]

    const activity = { userId, action }

    console.log("Activity sent →", activity)

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(activity)
    })

    const text = await response.text()

    console.log("Server response →", text)
    console.log("-----------------------------------")
  } catch (error) {
    console.error("Simulation error:", error)
  }
}

setInterval(sendActivity, 5000)