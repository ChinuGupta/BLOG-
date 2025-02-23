import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router";

type proptype = {
    isLoggedIn: boolean;
    login: (email: string) => void;
    register: (email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<proptype | null>(null);
export default function AuthProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate()

    const [isLoggedIn, setIsloggedIn] = useState(!!localStorage.getItem("email"));


    const login = (email: string) => {

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const user = users.find((user: { email: string }) =>
            user.email === email
        );

        if (user) {
            setIsloggedIn(true);
            navigate('/');
        } else {
            alert("Invalid email or password");
        }


    }
    const register = (email: string, password: string) => {

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const userExists = users.some((user: { email: string }) => user.email === email);

        if (userExists) {
            alert("User already exists");
            return;
        }

        users.push({ email, password });

        localStorage.setItem("users", JSON.stringify(users));

        setIsloggedIn(true);
        navigate('/');
    }

    const logout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        setIsloggedIn(false);
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, register, logout }}>{children}</AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("Context invalid");
    }
    return context;
}

