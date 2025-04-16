import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_ENDPOINTS } from "../../constants/authConstants";
import { setPasswordService } from "../../services/authservice";


const SetPassword = () => {

    const navigate = useNavigate();
    const email = localStorage.getItem("email");

    const [password, setPassword] = useState({
        oldpassword:"",
        newpassword:"",
        confirmpassword:""
        
    });

    const handlePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}= e.target;
        setPassword((prev) => ({ ...prev, [name]: value }));
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            alert("No email found. Please log in again.");
            navigate("/");
            return;
        }

        try {

            const response = await axios.get(`${API_ENDPOINTS.USERS}?email=${email}`);
            const user = response.data.length > 0 ? response.data[0] : null;
            console.log(user);

            if (!user) {
                alert("User not found.");
                navigate("/");
                return;
            }

            if (user.password !== password.oldpassword && user.password !== "") {  
                alert("Old password is incorrect.");
                return;
            }

            if (password.newpassword !== password.confirmpassword) {
                alert("New password and confirm password do not match.");
                return;
            }

            await setPasswordService(user.id, password.newpassword);
            alert("Password set successfully!");
            navigate("/Blog");

        }
        catch (error) {
            console.error("Error setting password:", error);
            alert("Failed to set password. Please try again.");
        }
    };

    const handleLater = () => {
        navigate("/Blog")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form className="bg-white p-7 w-[20rem] rounded h-70" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-center">Set Your Password</h1>

                <input
                    type="password"
                    placeholder="Enter old password"
                    className="w-full p-2 border rounded mt-4"
                    name="oldpassword"
                    value={password.oldpassword}
                    onChange={handlePassword}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter New password"
                    className="w-full p-2 border rounded mt-4"
                    name="newpassword"
                    value={password.newpassword}
                    onChange={handlePassword}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full p-2 border rounded mt-4"
                    name="confirmpassword"
                    value={password.confirmpassword}
                    onChange={handlePassword}
                    required
                />

                <button type="submit" className="w-full p-2 bg-[#1447E6] text-white rounded mt-4">
                    Save Password
                </button>

                <button type="submit" className="w-full p-2 bg-[#1447E6] text-white rounded mt-4" onClick={handleLater}>
                    Later
                </button>

            </form>
        </div>
    );
};

export default SetPassword;
