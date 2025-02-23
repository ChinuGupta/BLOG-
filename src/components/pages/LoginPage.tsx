import React, { useState } from "react";
import InputField from "../InputFieldComponent";
import { useAuth } from "../organisms/AuthContext";
import { Link } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
  const { login } = useAuth();

  const handleEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    if (!passwordValidation.test(password)) {
      if (password.length < 8) {
        setMessage("Password must be at least 8 characters long.");
      } else if (!/[A-Z]/.test(password)) {
        setMessage("Password must contain at least one uppercase letter.");
      } else if (!/[a-z]/.test(password)) {
        setMessage("Password must contain at least one lowercase letter.");
      } else if (!/\d/.test(password)) {
        setMessage("Password must contain at least one number.");
      }
      return;
    }

    login(email);
    alert("User successfully logged in");

    setEmail("");
    setPassword("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-7 rounded w-90 h-90" onSubmit={handleEvent}>
        <h1 className="flex items-center justify-center">Login</h1>
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <p className="text-red-600">{message}</p>
        <button type="submit" className="w-full p-2 bg-[#1447E6] text-white rounded">
          Login
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          New User?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
