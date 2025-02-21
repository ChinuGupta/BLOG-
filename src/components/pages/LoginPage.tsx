// import React, { useState } from "react";
// import InputField from "../InputFieldComponent";
// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   // const [isLoggin,setIsLoggin]=useState<boolean>(false);

//   const handleEvent = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

//     if (passwordValidation.test(password)) {
    
      
//       alert("User successfully logged in");

//     } else {
//       alert("Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one number.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form className="bg-white p-7 rounded w-90 h-90" onSubmit={handleEvent}>
//         <h1 className="flex items-center justify-center">Login</h1>
//         <InputField
//           label="Email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter Email"
//         />
//         <InputField
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
//           Login
//         </button>
//         <p className="text-center text-sm text-gray-600 mt-2">
//           New User?{" "}
//           <a href="/register" className="text-blue-500 hover:underline">Register here</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import InputField from "../InputFieldComponent";
import { useAuth } from "../organisms/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordValidation.test(password)) {
      alert("Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one number.");
      return;
    }

    login(email, password); 
    alert("User successfully logged in");

    setEmail("");
    setPassword("");
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
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Login
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          New User?{" "}
          <a href="/register" className="text-blue-500 hover:underline">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
