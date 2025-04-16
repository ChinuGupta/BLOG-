import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router";

type Protectedprops = {
    children: ReactNode
}

export default function ProtecterRoute({ children }: Protectedprops) {
    const { isLoggedIn } = useAuth()
    return isLoggedIn ? children : (<Navigate to="/" />);
}

