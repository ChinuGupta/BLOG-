import { useState } from "react";
import InputField from "../InputFieldComponent";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { registerUser } from "../../services/authservice";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState("");

  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value)
    if (name === "password") setPassword(value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      id: crypto.randomUUID(),
      email: email,
      password: password,
      firstName: email.split("@")[0],
      lastName: "",
      username: email.split("@")[0],
      age: 18,
      gender: "Not specified",
      bio: "Hello! I'm new here.",
      profilePicture: "https://via.placeholder.com/150",
      socialLinks: {
        twitter: "",
        facebook: "",
        instagram: "",
      },
      totalPosts: 0,
      followers: 0,
      following: 0,
      subscriptionPlan: "Free",
      lastLogin: new Date().toISOString(),
    };

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
    setMessage("");



    try {
      const response = await registerUser(newUser)

      if (response) {
        const createdUser = response.data;
        login(createdUser.id, createdUser.email);
        alert("User successfully registered and logged in!");
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration", error);
      alert("An error occurred during registration!");
    }

  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-10 rounded w-90 h-90"
        onSubmit={handleSubmit}
      >
        <h1 className="flex items-center justify-center">Register</h1>
        <InputField
          label="Email"
          name="email"
          type="email"
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
        <p className="text-red-600">{message}</p>

        <button type="submit" className="w-full p-2 bg-[#1447E6] text-white rounded cursor-pointer">
          Register
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          Already registered?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
