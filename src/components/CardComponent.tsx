import { Link } from "react-router-dom";
import { CardProps } from "../types/types"
import {FUNCBLOGDETAILPAGE} from "../constants/Urls";


export default function CardComponent({ blogs }: CardProps) {
  return (
    <div className="bg-white p-6 border border-gray-300 rounded-lg ">
      <h2 className="text-xl font-semibold text-gray-800">{blogs.title}</h2>
      <h5 className="text-md text-gray-700">Author: {blogs.author}</h5>
      <p className="text-gray-600 text-sm">{blogs.content.slice(0, 250)}...</p>

      <Link to={FUNCBLOGDETAILPAGE(blogs.id)}>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition cursor-pointer">
          Read More →
        </button>
      </Link>
    </div>
  );
}
