import React, { useState } from "react";
import API from "../services/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/login", formData);

      localStorage.setItem("token", data.token);

      alert("Login Successful");

      window.location.href = "/dashboard";
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        onSubmit={submitHandler}
        className="bg-white p-10 rounded-2xl shadow-2xl w-[400px]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;