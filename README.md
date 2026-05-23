Project Management System

A full-stack MERN Project Management System where users can create projects, assign tasks, track progress, and manage teams with role-based authentication.

🚀 Features
User Authentication (JWT Login/Register)
Role-Based Access Control (Admin / Member)
Create & Manage Projects
Create, Assign & Track Tasks
Dashboard Analytics
Protected Routes
RESTful APIs
MongoDB Database Integration
Responsive Modern UI using Tailwind CSS
Fully Deployed Application

🛠️ Tech Stack
Frontend
React.js
React Router DOM
Axios
Tailwind CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcrypt.js
Deployment
Railway (Backend)
Vercel (Frontend)
MongoDB Atlas (Database)

📂 Project Structure
project-management-system/
│
├── client/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.js
│ │ └── index.js
│
├── server/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── server.js
│ └── .env
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/project-management-system.git

2️⃣ Install Backend Dependencies
cd server
npm install

3️⃣ Create .env File

Inside server folder create .env

PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY

4️⃣ Start Backend Server
npm run dev

Backend runs on:

http://localhost:5000

5️⃣ Install Frontend Dependencies

Open new terminal:

cd client
npm install

6️⃣ Start Frontend
npm start

Frontend runs on:

http://localhost:3000

🔐 Authentication APIs
Register User
POST /api/auth/register
Request Body
{
"name": "Sonam",
"email": "sonam@gmail.com",
"password": "123456",
"role": "admin"
}
Login User
POST /api/auth/login
Request Body
{
"email": "sonam@gmail.com",
"password": "123456"
}

📁 Project APIs
Create Project
POST /api/projects
Get Projects
GET /api/projects

✅ Task APIs
Create Task
POST /api/tasks
Request Body
{
"title": "Build Login UI",
"description": "Create responsive login page",
"project": "PROJECT_ID",
"status": "todo"
}
Get Tasks
GET /api/tasks
Update Task
PUT /api/tasks/:id
Delete Task
DELETE /api/tasks/:id

📊 Dashboard Features
Total Projects
Total Tasks
Completed Tasks
Overdue Tasks

🔒 Role-Based Access
Role Permissions
Admin Create/Edit/Delete Projects & Tasks
Member View & Update Assigned Tasks

🌐 Deployment Links
Frontend
https://your-frontend.vercel.app
Backend
https://your-backend.up.railway.app

📸 Screenshots
![alt text](<Screenshot 2026-05-23 181348.png>) ![alt text](<Screenshot 2026-05-23 181316.png>) ![alt text](<Screenshot 2026-05-23 181232.png>) ![alt text](<Screenshot 2026-05-23 181142.png>) ![alt text](<Screenshot 2026-05-23 181104.png>)

🚀 Future Improvements
Real-time notifications
Drag & Drop Kanban Board
File Uploads
Team Chat
Email Notifications
Dark Mode
Activity Logs

👨‍💻 Author

Sonam
MCA Student
MERN Stack Developer
