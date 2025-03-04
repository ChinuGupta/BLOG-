import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogs } from "../../types/types";
import { deleteBlogService, getBlogsById } from "../../services/authservice";

export default function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<blogs | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlogsById(id);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        navigate("/Blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, navigate]);

  const handleDelete = async () => {
    try {
      await deleteBlogService(Number(id))
      alert("Blog deleted successfully.");
      navigate("/Blog");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading Blogs...</p>;
  if (!blog) return <p className="text-center text-gray-500">No details found for this blog.</p>;

  return (
    <div className="border flex flex-row justify-center m-20">
      <div className="p-6 w-full">
        <div className="p-6 w-full flex justify-end gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={handleDelete}>
            🗑️ Delete
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={() => navigate(`/editBlog/${blog.id}`)}>
            🖊️ Edit
          </button>
        </div>

        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <h4 className="text-md text-gray-700 mt-2">Author: {blog.author}</h4>
        <p className="text-gray-700 mt-4">{blog.content.slice(0, 150)}</p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Comments</h3>
          {blog.comments.length > 0 ? (
            blog.comments.map((comment, index) => (
              <div key={index} className="border-t mt-2 pt-2">
                <p className="text-sm text-gray-600">
                  <strong>💬 {comment.username}</strong> - {comment.comment} - {comment.date}
                </p>

              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
