import Links from "../atoms/Links";
import { useAuth } from "../../context/AuthContext";

export default function Headermolecules() {
    const { isLoggedIn } = useAuth();
    return (

        <div className="flex items-center gap-10 p-4 ">
            {
                isLoggedIn ? (

                    <>
                        <Links title="User" to="/UserListPage" />
                        <Links title="Blogs" to="/Blog" />
                        <Links title="About" to="/about" />
                    </>
                    
                ) :
                    ""
            }

        </div>
    );
}
