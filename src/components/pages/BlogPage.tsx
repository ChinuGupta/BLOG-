import CardComponent from "../CardComponent";
import { blogs } from "../../types/types"
import BlogForm from "./BlogForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchBlogs } from "../../Actions/actions";
import Loading from "../Loading";

export default function BlogPage() {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch<AppDispatch>()
  const { blog: bloglist, isloading, iserror } = useSelector((state: RootState) => state.fetchBlog);

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  const fetchbloglist = () => dispatch(fetchBlogs());

  if (isloading) return <h1 className="text-2xl font-bold text-center"><Loading/></h1>;
  if (iserror) return <h1 className="text-2xl text-red-600 font-bold text-center">{iserror}</h1>;

  return (
    <div>

      <h1 className="text-2xl font-bold text-center mb-6">My Blogs</h1>
      <div className="flex justify-center item-center mb-10">
        <button
          className=" bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => setShowForm(true)}
        >
          Add Blog
        </button>
        {showForm && <BlogForm fetchbloglist={fetchbloglist} closeForm={() => setShowForm(false)} bloglist={bloglist} />}
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 px-4">

        {bloglist.length > 0 ? (
          bloglist.map((blog: blogs) => <CardComponent key={blog.id} blogs={blog} />)
        ) : (
          <p className="text-center text-gray-500">No Blogs Found</p>
        )}
      </div>
    </div>
  );
}
