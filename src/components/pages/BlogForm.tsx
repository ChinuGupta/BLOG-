import { useState } from "react";
import { blogs } from "../../types/types";
import { addBlogService } from "../../services/authservice";

export default function BlogForm({ fetchbloglist, closeForm, bloglist }: { fetchbloglist: () => void, closeForm: () => void, bloglist: blogs[] }) {

    const [blogData, setBlogData] = useState<blogs>({
        id: bloglist.length > 0 ? bloglist[bloglist.length - 1].id + 1 : 1,
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };


    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlogData({ ...blogData, tags: e.target.value.split(",").map(tag => tag.trim()) });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!blogData.title || !blogData.author || !blogData.content) {
            alert("Title, Author, and Content are required!");
            return;
        }
        try {
            addBlogService(blogData);
            fetchbloglist();
            closeForm();
            alert("Blog added successfully!");
        } catch (error) {
            console.error("Error adding blog:", error);
            alert("Failed to add blog. Please try again.");
        }
        fetchbloglist()
        closeForm();

    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 backdrop-blur-sm ">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
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
                        onChange={handleTagsChange}
                        className="w-full p-2 border rounded mb-2"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Submit
                    </button>
                    <button type="button" onClick={closeForm} className="ml-2 text-gray-600">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}
