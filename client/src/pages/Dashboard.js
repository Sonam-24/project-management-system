import React, { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const { data } = await API.get("/dashboard");
      setStats(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-700">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl">Projects</h2>
            <p className="text-4xl font-bold mt-4">
              {stats.totalProjects}
            </p>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl">Tasks</h2>
            <p className="text-4xl font-bold mt-4">
              {stats.totalTasks}
            </p>
          </div>

          <div className="bg-purple-500 text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl">Completed</h2>
            <p className="text-4xl font-bold mt-4">
              {stats.completedTasks}
            </p>
          </div>

          <div className="bg-red-500 text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl">Overdue</h2>
            <p className="text-4xl font-bold mt-4">
              {stats.overdueTasks}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;