# Mini Health Dashboard System

A full-stack health monitoring dashboard that receives health data via API and displays it in a live frontend dashboard.

## Live Links

### Frontend

https://mini-health-dashboard-amber.vercel.app

### Backend API

https://mini-health-dashboard-backend.onrender.com/api/health-data/DEV123

### GitHub Repository

https://github.com/Aparnachoudhury/mini_health_dashboard

---

## Features

* Add health data using POST API
* Fetch latest health records by device ID
* React dashboard to display:

  * Heart Rate
  * SpO2
  * Timestamp
* Auto-refresh every 5 seconds
* Fully deployed frontend and backend

---

## Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## API Endpoints

### POST Health Data

POST /api/health-data

#### Sample Request Body

```json
{
  "device_id": "DEV123",
  "heart_rate": 78,
  "spo2": 97,
  "timestamp": "2026-04-15T10:30:00Z"
}
```

### GET Health Data

GET /api/health-data/:device_id

#### Example

GET /api/health-data/DEV123

Returns latest 10 records.

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/Aparnachoudhury/mini_health_dashboard.git
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend runs on:
http://localhost:5000

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:
http://localhost:3000

---

## Sample Test Device

Use:
DEV123

to view sample health data in the dashboard.
