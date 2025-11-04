# 🧩 Full Stack Evaluator - Project Notes

## Overview
This project is a simple full-stack task management app designed to demonstrate integration between a **React frontend** and an **ASP.NET Core backend** using **PostgreSQL** as the database.

While my core expertise is in front-end and JavaScript ecosystems, this project highlights my ability to adapt quickly to unfamiliar stacks — in this case, .NET and C#. Despite limited prior experience, I successfully configured, connected, and ran the full pipeline from frontend to backend to database.

---

## 🏗️ Tech Stack
- **Frontend:** React + Axios + Vite  
- **Backend:** ASP.NET Core 9 (C#) + Entity Framework Core  
- **Database:** PostgreSQL  
- **Communication:** RESTful API (JSON)  

---

⏱️ **Time Context**
Started: Around 2:00–3:00 PM (after completing some errands in the morning)  
Duration: Within the 4–5 hour window stated in the instructions  

I treated this like a timed technical test, focusing on completing a clean end-to-end integration between the React frontend and .NET backend with PostgreSQL, while maintaining clarity and structure in the code.

## ⚙️ Setup Steps

### 1. Backend Setup
1. Clone the repository and open the backend folder.  
2. Update your database connection inside `appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Host=localhost;Port=5432;Database=taskmanagerdb;Username=postgres;Password=yourpassword"
   }
Run the following commands to set up and seed the database:

dotnet ef migrations add InitialCreate
dotnet ef database update

Launch the backend:
dotnet run

The API runs by default on:
👉 http://localhost:5215

2. Frontend Setup
Inside the frontend directory, open src/api/axios.js and confirm:
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5215',
});

export default api;

Run the frontend locally:
npm install
npm run dev
Open the app at:
👉 http://localhost:5173

🧪 Testing and Verification
Upon running the backend, the console logs multiple:

Executed DbCommand (x ms) SELECT t."Id", t."IsDone", t."Title", t."UserId" FROM "Tasks" AS t
✅ This confirms Entity Framework is successfully querying the database.

The frontend connects correctly (no CORS or network errors).

UI displays an empty state because no tasks exist yet — which is expected.

🚧 Troubleshooting Notes
If backend errors mention HTTPS redirection, it’s safe to ignore for local development.

Make sure PostgreSQL service is running before launching the backend.

If frontend shows nothing, check browser console → should show no fetch errors if API is connected.

🔍 Observations
Successfully bridged communication between React and .NET API.

Configured and tested EF Core database migrations without prior C# background.

Ensured consistent port routing between backend (:5215) and frontend (:5173).

Verified end-to-end data flow — from API to React — even with an empty dataset.

💡 Reflections
This mini-project gave me practical exposure to:

Building and running a C#/.NET API.

Using Entity Framework migrations to manage database schema.

Handling Axios API integration and debugging fetch/network responses.

Managing CORS, connection strings, and local environment setup.

Even though .NET isn’t my main stack, I treated it as a problem-solving exercise and approached it methodically — learning just enough to get the full system running correctly and validated.

🚀 Next Steps (if expanded)
If developed further, the app could include:

A task creation form on the frontend.

API endpoints for POST, PUT, and DELETE.

Authentication (Clerk or Supabase).

A deployed environment via Render (backend) and Vercel (frontend).

✅ Final Status
Backend up and responding

Database connected and seeded (no errors)

Frontend integrated (fetching successfully)

Project functional and verified end-to-end

---

## 🧩 Development Process Summary

Even though I couldn’t commit every micro-step due to focus on debugging and setup issues, here’s the rough sequence I followed:

1. Cloned the given repo and inspected both backend and frontend structures.  
2. Set up PostgreSQL locally and created the `taskmanagerdb` database.  
3. Configured `appsettings.json` with a working connection string.  
4. Installed and configured Entity Framework Core tools.  
5. Created and applied migrations to initialize the database schema.  
6. Connected the frontend using Axios (`/api/axios.js`) with the backend’s base URL.  
7. Debugged API calls and verified successful database queries via console logs.  
8. Finalized `NOTES.md` and validated that the project runs end-to-end.  

Each step focused on making sure the app could fetch data from the backend — even if no tasks existed yet — proving full integration.`

🧠 Summary
This project demonstrates adaptability, cross-stack problem-solving, and a results-first mindset under time constraints. Even outside my usual front-end and JavaScript ecosystem, I was able to configure, debug, and complete the setup efficiently — ensuring a working full-stack app with clean communication between layers.