const axios = require("axios");

async function getRiskScore(activity) {

  const response = await axios.post(
    "http://127.0.0.1:8000/predict-risk",
    [activity]
  );

  return response.data.results[0];
}

module.exports = { getRiskScore };