import { Link } from "react-router-dom";
import { CardProps } from "../types/types"
import { FUNCBLOGDETAILPAGE } from "../constants/Urls";


export default function CardComponent({ blogs }: CardProps) {
  return (

    <div className="bg-white p-6 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-semibold text-black">{blogs.title.slice(0, 50)}...</h2>
      <h5 className="text-md text-black"><span className="font-bold">Author : </span> {blogs.author}</h5>
      <p className="text-gray-600 text-sm">{blogs.content.slice(0, 250)}...</p>
      <p>📅{blogs.datePublished}</p>
      <p>❤️{blogs.likes}</p>

      <Link to={FUNCBLOGDETAILPAGE(blogs.id)}>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition cursor-pointer">
          Read More →
        </button>
      </Link>
    </div>
  );
}
