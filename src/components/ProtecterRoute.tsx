import { ReactNode } from "react";
import { useAuth } from "./organisms/AuthContext"
import { Navigate } from "react-router";
type Protectedprops = {
    children: ReactNode
}
export default function ProtecterRoute({ children }: Protectedprops) {
    const { isLoggedIn } = useAuth()
    return isLoggedIn ? children : <Navigate to="/" replace />;
}

export function RedirectIfLoggedIn({ children }: Protectedprops) {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Navigate to="/Blog" replace/> : children;
}
