
import Button from '../atoms/Button'
import { useAuth } from '../organisms/AuthContext'
export default function Headerbuttonmolecules() {
  const {isLoggedIn} =useAuth();
  return (
    <>
      {isLoggedIn?(<>
      
        <Button text="Logout" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300" />
      </>):
      (<>
        <Button text="Sign Up" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300" />
        <Button text="Sign In" className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300" />
      </>)}
      
    </>
  )
}
