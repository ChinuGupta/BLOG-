import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { getUsers } from "../../services/authservice";
// import { User } from "../../types/types";
import { FUNCUSERDETAILPAGE } from "../../constants/Urls";
import { useDispatch, useSelector } from "react-redux";
import {fetchUsers} from "../../Actions/actions"
import { AppDispatch, RootState } from "../../redux/store";
import Loading from "../Loading";

export default function UserListPage() {

  const dispatch = useDispatch<AppDispatch>()
  const { user: users, isloading, iserror } = useSelector((state: RootState) => state.fetchUsers);


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isloading) return <h1 className="text-2xl font-bold text-center"><Loading/></h1>;
  if (iserror) return <h1 className="text-2xl text-red-600 font-bold text-center">{iserror}</h1>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">User List</h1>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="border bg-white p-6 border-gray-300 ">
              <h1 className="text-xl font-semibold text-gray-800">
                <span className="text-gray-600">Username:</span> {user.username}
              </h1>
              <h3 className="text-xl font-semibold">
                <span className="text-gray-600">Email:</span> {user.email}
              </h3>
              <Link to={FUNCUSERDETAILPAGE(user.id)} className="text-blue-500 hover:underline">
                Show Details {" →"}
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">No users found.</p>
        )}
      </div>
    </div>
  );
}




