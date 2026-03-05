import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getOverview = () =>
  API.get("/analytics/overview");

export const getAlerts = () =>
  API.get("/analytics/alerts");

export const getHighRiskUsers = () =>
  API.get("/analytics/users/high-risk");

export const getRiskTrends = () =>
  API.get("/analytics/risk-trends");

export const getActivities = () =>
  API.get("/activity");