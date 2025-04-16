import React, { useState, useEffect } from "react";
import InputField from "../InputFieldComponent";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../../services/authservice";
import GoogleButton from 'react-google-button';
import { User } from "../../types/types";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState<{ email: string, password: string }>({
    email: "",
    password: ""
  });
  const { login, googleLogin, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/UserListPage");
    }
  }, [isLoggedIn, navigate]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;
    setUserdata((prev) => ({
      ...prev, [name]: value
    }));

    if (name === "email") {
      try {
        const response = await getUsers({ email: value });
        if (response.data && response.data.length > 0) {
          const curuser = response.data.find((user: User) => user.email === value);

          if (curuser?.isGoogleUser) {

            alert("You have signed in with Google before. Please log in using Google.");
            setUserdata({ email: "", password: "" });

          }
        }
      } catch (error) {
        console.error("Error checking user email", error);
      }
    }
  };

  const handleEvent = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    try {
      const response = await getUsers({ email: userdata.email });
      if (!response.data || response.data.length === 0) {
        alert("Invalid credentials");
        return;
      }

      const curuser = response.data.find((user: User) => user.email === userdata.email);
      if (!curuser) {
        alert("User not found!");
        return;
      }

      if (curuser.password !== userdata.password) {
        alert("Invalid credentials!");
        return;
      }

      login(curuser.id, curuser.email);
      setUserdata({ email: "", password: "" });

    } catch (error) {
      console.error("Login error", error);
      alert("Login failed!");
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-7 w-[20rem] rounded h-70" onSubmit={handleEvent}>
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold">Login</h1>
        </div>

        <InputField
          label="Email"
          type="email"
          name="email"
          value={userdata.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="w-full p-2 border rounded"
          required={true}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={userdata.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 border rounded"
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

        <div className="m-2">
          <GoogleButton onClick={googleLogin} />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
