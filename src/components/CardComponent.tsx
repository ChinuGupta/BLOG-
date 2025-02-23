import { Link } from "react-router";

type BlogType = {
    id: number;
    title: string;
    body: string;
};

type Carttypeprops = {
    blogs: BlogType
}

export default function CardComponent({ blogs }: Carttypeprops) {


    return (
        <div
            className="bg-white p-6 border border-gray-300  "
        >
            <h2 className="text-xl font-semibold text-gray-800">{blogs.title}</h2>
            <p className="text-gray-600 text-sm">{blogs.body}</p>

            <Link to={`/BlogDetail/${blogs.id}`}><button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                Read More{" ->"}
            </button>
            </Link>
        </div>)
}


