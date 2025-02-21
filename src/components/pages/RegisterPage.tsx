import { useState } from "react";
import InputField from "../InputFieldComponent";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-7 rounded w-90 h-90">
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
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Register
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          Already registered?{" "}
          <a href="/login" className="text-blue-500 hover:underline">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
