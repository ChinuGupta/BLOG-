import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import { useAuth } from '../../context/AuthContext';
import { useRef } from 'react';

export default function Headerbuttonmolecules() {
  const { isLoggedIn,logout } = useAuth();
  const toggleColorRef1 = useRef<HTMLButtonElement>(null);
  const toggleColorRef2 = useRef<HTMLButtonElement>(null);

  const handleToggle1 = () => {
    
    if (toggleColorRef1.current && toggleColorRef2.current) {
      toggleColorRef1.current.style.backgroundColor = "blue";
      toggleColorRef2.current.style.backgroundColor = "white";
      toggleColorRef2.current.style.color = "blue";
      toggleColorRef1.current.style.color = "white";
    }
  };

  const handleToggle2 = () => {
    if (toggleColorRef2.current && toggleColorRef1.current) {
      toggleColorRef2.current.style.backgroundColor = "blue";
      toggleColorRef1.current.style.backgroundColor = "white";
      toggleColorRef1.current.style.color = "blue";
      toggleColorRef2.current.style.color = "white";
      
    }

  };


  return (
    <>
      {isLoggedIn ? (
        <>
          <Link to="/">
            <Button
              text="Logout"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer"
              onClick={()=>logout()}
            />
          </Link>
        </>
      ) : (
        <>
          <Link to="/register">
            <Button
              ref={toggleColorRef1}
              text="Sign Up"
              className="bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition duration-300 cursor-pointer"
              onClick={handleToggle1}
            />
          </Link>
          <Link to="/">
            <Button
              ref={toggleColorRef2}
              text="Log In"
              className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-200 transition duration-300 cursor-pointer"
              onClick={handleToggle2}
            />
          </Link>
        </>
      )}
    </>
  );
}

