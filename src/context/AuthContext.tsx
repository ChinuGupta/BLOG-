import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContextType } from "../types/types";
import { signInWithPopup, onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { API_ENDPOINTS } from "../constants/authConstants";
import axios from "axios";

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("email"));

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoggedIn(true);
            } else {
                setUser(null);
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);


    const login = (id: number, email: string) => {
        localStorage.setItem("email", email);
        localStorage.setItem("id", String(id));
        setIsLoggedIn(true);
        navigate("/UserListPage");
    };

    const googleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log(auth)
            console.log(googleProvider)

            if (!user.email) {
                alert("Google did not return an email address.");
                return;
            }

            // console.log("Google User:", user);

            const response = await axios.get(`${API_ENDPOINTS.USERS}?email=${user.email}`);
            const existingUser = response.data.length > 0 ? response.data[0] : null;

            let userId = user.uid;

            if (!existingUser) {
                const newUser = {
                    id: userId,
                    email: user.email,
                    firstName: user.displayName ? user.displayName.split(" ")[0] : user.email.split("@")[0],
                    lastName: user.displayName ? user.displayName.split(" ")[1] || "" : "",
                    username: user.email.split("@")[0],
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
                    isGoogleUser: true,
                    followers: 0,
                    following: 0,
                    subscriptionPlan: "Free",
                    lastLogin: new Date().toISOString(),
                };

                const createUserResponse = await axios.post(API_ENDPOINTS.USERS, newUser);
                userId = createUserResponse.data.id;
            }

            localStorage.setItem("email", user.email);
            localStorage.setItem("id", userId);
            setUser(user);
            setIsLoggedIn(true);
            navigate("/UserListPage");

        }

        catch (error) {
            console.error("Google Login Error:", error);
            alert("Error logging in with Google");
        }

    };


    const logout = async () => {
        try {
            await signOut(auth);
            localStorage.clear();
            setUser(null);
            setIsLoggedIn(false);
            navigate("/");
        } catch (error) {
            console.error("Logout Error:", error);
            alert("Failed to log out. Try again.");
        }
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, googleLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Wrap the component in AuthProvider");
    }
    return context;
};
