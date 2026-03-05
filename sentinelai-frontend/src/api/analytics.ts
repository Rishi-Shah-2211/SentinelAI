import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getOverview = async () => {
  const res = await API.get("/analytics/overview");
  return res.data;
};

export const getRiskTrends = async () => {
  const res = await API.get("/analytics/risk-trends");
  return res.data;
};

export const getHighRiskUsers = async () => {
  const res = await API.get("/analytics/users/high-risk");
  return res.data;
};

export const getAlerts = async () => {
  const res = await API.get("/analytics/alerts");
  return res.data;
};