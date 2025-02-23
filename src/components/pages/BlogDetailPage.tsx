import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type BlogType = {
    id: number;
    title: string;
    body: string;
};

export default function BlogDetailPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState<BlogType | null>(null);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setBlog(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (!blog) return <p>Loading...</p>;

    return (
      <div className="border flex flex-row justify-center m-20">
        <div className="p-6">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="text-gray-700 mt-4">{blog.body}</p>
        </div>
        </div>
    );
}
