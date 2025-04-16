import { useState } from "react";
import InputField from "../InputFieldComponent";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { registerUser } from "../../services/authservice";
import { passwordValidation } from "../../middleware/passwordvalidation"
import { checkUserExists } from "../../middleware/Userexist";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState("");

  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value)
    if (name === "password") setPassword(value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const existingUser = await checkUserExists(email);
    if (existingUser) {
      alert("Email is already registered use different email");
      return;
    }

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
      isGoogleUser:false,
      followers: 0,
      following: 0,
      subscriptionPlan: "Free",
      lastLogin: new Date().toISOString(),
    };


    passwordValidation(password);
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
        className="bg-white rounded  p-7 w-[20rem]  h-70"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold">Register</h1>

        </div>
        <InputField
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="w-full p-2 border rounded"
          required={true}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 border rounded"
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
