import { useEffect, useState } from "react";
import { blogs } from "../../types/types";
import { useNavigate, useParams } from "react-router";
import { editBlogServices, getBlogsById } from "../../services/authservice";

export default function EditBlog() {
    const params=useParams();
    const navigate=useNavigate();
    const blogid=Number(params.id);
    const [blogData, setBlogData] = useState<blogs>({
        id: 1,
        userId: 1,
        title: "",
        author: "",
        datePublished: new Date().toISOString(),
        category: "",
        content: "",
        tags: [],
        comments: [],
        likes: 1111,
    });

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await getBlogsById(String(blogid))
                if (res?.data) {
                    setBlogData(res.data);
                }
            } catch (err) {
                console.error("Error fetching blog:", err);
            }
        };
        fetchBlog();
    }, [blogid]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBlogData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlogData((prev) => ({ ...prev, tags: e.target.value.split(",").map(tag => tag.trim()) }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!blogData.title || !blogData.author || !blogData.content) {
            alert("Title, Author, and Content are required!");
            return;
        }
        try {
            const res = await editBlogServices(String(blogid),blogData);
            console.log("Blog updated successfully:", res.data);
            navigate("/Blog");
            
        } catch (err) {
            console.error("Error updating blog:", err);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Update Blog</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title *"
                        value={blogData.title}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                    <input
                        type="text"
                        name="author"
                        placeholder="Author *"
                        value={blogData.author}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={blogData.category}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mb-2"
                    />
                    <textarea
                        name="content"
                        placeholder="Blog Content *"
                        value={blogData.content}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                    <input
                        type="text"
                        name="tags"
                        placeholder="Tags (comma separated)"
                        value={blogData.tags.join(", ")}
                        onChange={handleTagsChange}
                        className="w-full p-2 border rounded mb-2"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Submit
                    </button>
                    <button type="button" onClick={()=>navigate("/Blog")} className="ml-2 text-gray-600 cursor-pointer">
                        Go Back
                    </button>
                </form>
            </div>
        </div>
    );
}
