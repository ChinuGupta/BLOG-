import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "../../types/types";
import { USERLISTPAGE } from "../../constants/Urls";
import { deleteUserService, getUserById } from "../../services/authservice";

export default function UserDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(id)
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        navigate(USERLISTPAGE);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id, navigate]);

  const handleDelete = async () => {
    try {
      await deleteUserService(id)
      alert("User deleted successfully.");
      navigate(USERLISTPAGE);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading user details...</p>;
  if (!user) return <p className="text-center text-gray-500">No details found for this user.</p>;

  return (
    <div className="w-full container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">User Detail</h1>

      <div key={user.id} className="border bg-white p-6 rounded-lg shadow-md">
        <div className="p-2 flex justify-end gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={handleDelete}>
            🗑️ Delete
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            onClick={() => navigate(`/editUser/${user.id}`)}
          >
            🖊️ Edit
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <img src={user.profilePicture} alt={user.username} className="w-16 h-16 rounded-full border" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {user.firstName} {user.lastName} <span className="text-gray-500">(@{user.username})</span>
            </h2>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-700 font-medium">Age: {user.age}</p>
            <p className="text-gray-700">Gender: {user.gender}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-900">Bio</h3>
          <p className="text-gray-600">{user.bio}</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-900">Social Links</h3>
          <div className="flex space-x-4">
            <a href={user.socialLinks.twitter} target="_blank" className="text-blue-500">Twitter</a>
            <a href={user.socialLinks.facebook} target="_blank" className="text-blue-600">Facebook</a>
            <a href={user.socialLinks.instagram} target="_blank" className="text-pink-500">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
