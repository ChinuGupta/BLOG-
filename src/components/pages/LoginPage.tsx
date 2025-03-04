import React, { useState, useEffect } from "react";
import InputField from "../InputFieldComponent";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../../services/authservice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/UserListPage")
    }

  }, [isLoggedIn, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name,value } = e.target;
    if (name === "email") setEmail(value)
    if (name === "password") setPassword(value)
  };


  const handleEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await getUsers({
        email,
        password,
      })

      const users = response.data;
      if (!users || users.length === 0) {
        alert("Invalid credentials");
        return;
      }

      const curuser = users[0];

      login(curuser.id, curuser.email);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login error", error);
      alert("Login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-7 rounded w-90 h-90"
        onSubmit={handleEvent}
      >
        <h1 className="flex items-center justify-center">Login</h1>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter Email"
          required={true}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required={true}
        />
        <button type="submit" className="w-full p-2 bg-[#1447E6] text-white rounded cursor-pointer">
          Login
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          New User?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;




