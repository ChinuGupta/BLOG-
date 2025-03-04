import { useEffect, useState } from "react";
import { User } from "../../types/types";
import { useNavigate, useParams } from "react-router";
import { editUserServices, getUserById } from "../../services/authservice";

export default function EditUser() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [userData, setuserData] = useState<User>({

        id: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        username: "",
        age: 0,
        gender: "",
        bio: "",
        profilePicture: "",
        socialLinks: {
            twitter: "",
            facebook: "",
            instagram: "",
        },
        totalPosts: 0,
        followers: 0,
        following: 0,
        subscriptionPlan: "",
        lastLogin: "",
    });

    useEffect(() => {
        const fetchUser= async () => {
            // console.log("Fetching user with ID:", id);

            try {
                const res = await getUserById(id);
                if (res?.data) {
                    setuserData(res.data);
                }
            } catch (err) {
                console.error("Error fetching user:", err);
            }
        };
        fetchUser();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setuserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userData.firstName || !userData.username || !userData.lastName) {
            alert("firstName, username, and lastName are required!");
            return;
        }
        try {
            const res = await editUserServices(id, userData);
            console.log("User updated successfully:", res.data);
            navigate("/UserListPage");

        } catch (err) {
            console.error("Error updating user:", err);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Update User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={userData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={userData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                    required
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={userData.username}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={userData.age}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                />
                <textarea
                    name="bio"
                    placeholder="Bio"
                    value={userData.bio}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                />
            
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                    Submit
                </button>
                <button type="button" onClick={() => navigate("/UserListPage")} className="ml-2 text-gray-600 cursor-pointer">
                    Go Back
                </button>
            </form>
        </div>
    </div>
    );
}
