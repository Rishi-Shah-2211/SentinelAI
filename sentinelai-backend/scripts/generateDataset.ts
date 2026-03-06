import fs from "fs";
import path from "path";

const actions = [
  "login",
  "logout",
  "file_upload",
  "file_download",
  "email_send",
  "database_query",
  "usb_insert",
];

const users = Array.from({ length: 50 }, (_, i) => `USR${1000 + i}`);

function randomAction() {
  return actions[Math.floor(Math.random() * actions.length)];
}

function randomUser() {
  return users[Math.floor(Math.random() * users.length)];
}

function randomTimestamp() {
  return new Date(
    Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 30
  ).toISOString();
}

const events = [];

for (let i = 0; i < 20000; i++) {
  events.push({
    timestamp: randomTimestamp(),
    user: randomUser(),
    action: randomAction(),
  });
}

const output = path.join(__dirname, "../cert_dataset/generated.csv");

fs.writeFileSync(
  output,
  "timestamp,user,action\n" +
    events.map((e) => `${e.timestamp},${e.user},${e.action}`).join("\n")
);

console.log("Generated dataset with 20,000 events");