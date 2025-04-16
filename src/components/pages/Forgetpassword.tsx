import React, { useState } from "react";

export default function ForgetPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Password reset link sent to:", email);
        alert("Password reset link has been sent to your email.");
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
                <div className="flex justify-center item-center mb-4">
                <h1 className="text-2xl bold ">Forget Password</h1>
                </div>

                <input
                    type="email"
                    placeholder="Enter your Email"
                    className="border p-2 rounded w-full mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
                    Send
                </button>
            </form>
        </div>
    );
}
