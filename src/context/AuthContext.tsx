import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContextType } from "../types/types"

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate()

    const [isLoggedIn, setIsloggedIn] = useState(!!localStorage.getItem("email"));

    const login = (id: number, email: string) => {

        localStorage.setItem("email", email);
        localStorage.setItem("id", String(id));

        setIsloggedIn(true)
        navigate("/UserListPage")

    }

    const logout = () => {
        localStorage.clear();
        setIsloggedIn(false);
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
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

