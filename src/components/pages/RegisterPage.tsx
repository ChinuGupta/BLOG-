import { useState } from "react";
import InputField from "../InputFieldComponent";
import { Link } from "react-router";
import { useAuth } from "../organisms/AuthContext";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  
  const handleSubmit=()=>{
    register(email, password);
    alert("User successfully logged in");

    setEmail("");
    setPassword("");
    
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className=" bg-white p-10 rounded w-90 h-90" onSubmit={handleSubmit}>
        <h1 className="flex items-center justify-center">Register</h1>
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
        <button type="submit" className="w-full p-2 bg-[#1447E6] text-white rounded">
          Register
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          Already registered?{" "}
          <Link to="/" className="text-blue-500 hover:underline">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
