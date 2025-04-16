import { useAuth } from "../../context/AuthContext"
export default function Footer() {
  const { isLoggedIn } = useAuth()
  return (

    isLoggedIn
    &&
    <div className="bg-black text-white p-5 text-center mt-5">
      <p>&copy; 2025 BlogWebsite. All rights reserved.</p>
    </div>


  )
}
