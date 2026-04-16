import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [deviceId, setDeviceId] = useState("");
  const [healthData, setHealthData] = useState([]);

  const fetchData = async () => {
    if (!deviceId.trim()) return;

    try {
      const response = await axios.get(
        `http://localhost:5000/api/health-data/${deviceId}`
      );
      setHealthData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!deviceId.trim()) return;

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, [deviceId]);

  return (
    <div className="container">
      <h1>Mini Health Dashboard</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Device ID"
          value={deviceId}
          onChange={(e) => setDeviceId(e.target.value)}
        />
        <button onClick={fetchData}>Fetch Data</button>
      </div>

      <div className="data-container">
        {healthData.length > 0 ? (
          healthData.map((item, index) => (
            <div className="card" key={index}>
              <p><strong>Device:</strong> {item.device_id}</p>
              <p><strong>Heart Rate:</strong> {item.heart_rate} bpm</p>
              <p><strong>SpO2:</strong> {item.spo2}%</p>
              <p>
                <strong>Time:</strong>{" "}
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}

export default App;