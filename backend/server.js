const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const DATA_FILE = "data.json";

// Load existing data if file exists
let healthData = [];
if (fs.existsSync(DATA_FILE)) {
  const fileData = fs.readFileSync(DATA_FILE);
  healthData = JSON.parse(fileData);
}

// Save data to file
const saveData = () => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(healthData, null, 2));
};

// POST API
app.post("/api/health-data", (req, res) => {
  const data = req.body;
  healthData.push(data);
  saveData();
  res.json({ message: "Data saved successfully" });
});

// GET latest 10 records
app.get("/api/health-data/:device_id", (req, res) => {
  const deviceId = req.params.device_id;

  const result = healthData
    .filter(item => item.device_id === deviceId)
    .slice(-10)
    .reverse();

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});