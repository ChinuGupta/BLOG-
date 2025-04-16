import CardComponent from "../CardComponent";
import { blogs } from "../../types/types"
import BlogForm from "./BlogForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchBlogs } from "../../Actions/actions";
import Skeleton from "./Skeleton";
import fuzzy from "fuzzy"

export default function BlogPage() {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch<AppDispatch>()
  const { blog: bloglist, isloading, iserror } = useSelector((state: RootState) => state.fetchBlog);
  const [searchedblog, setSearchedBlog] = useState("");
  const [filteredblog, setFilteredBlog] = useState<blogs[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const blogperpage = 4;

  useEffect(() => {
    setFilteredBlog(bloglist);
  }, [bloglist])


  // useEffect(() => {

  //   const timer = setTimeout(() => {

  //     if (searchedblog === "") setFilteredBlog(bloglist);
     
  //     const curblogs=fuzzy.filter()
  //     const curblogs = bloglist.filter((blog) =>
  //       blog.title.toLowerCase().includes(searchedblog.toLowerCase())
  //     );

  //     setFilteredBlog(curblogs);

  //   }, 1000)

  //   return () => clearTimeout(timer);

  // },[bloglist,searchedblog])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchedblog === "") {
        setFilteredBlog(bloglist);
        setSuggestions([]);
        return;
      }
  
      const blogTitles = bloglist.map((blog) => blog.title);
  
      const results = fuzzy.filter(searchedblog, blogTitles);
      const matchedTitles = results.map((res) => res.original);
  
      setSuggestions(matchedTitles);
  
      const curblogs = bloglist.filter((blog) =>
        matchedTitles.includes(blog.title)
      );
  
      setFilteredBlog(curblogs);
    }, 300);
  
    return () => clearTimeout(timer);
  }, [searchedblog, bloglist]);

  
  const handleprev = () => {
    setPage(page - 1);
  };

  const handlenext = () => {
    setPage(page + 1);
  };

  const totalPost = Math.ceil(bloglist.length / blogperpage);
  const paginatedblog = filteredblog.slice(page * blogperpage - blogperpage, page * blogperpage);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedBlog(e.target.value);
    setPage(1);
  }

  const sortbydate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cur = e.target.value;
    let sortblog;
    if (cur === "desc")
      sortblog = [...filteredblog].sort((a, b) =>
        Number(new Date(b.datePublished)) - Number(new Date(a.datePublished))
      )
    else {

      sortblog = [...filteredblog].sort((a, b) =>
        Number(new Date(a.datePublished)) - Number(new Date(b.datePublished))
      )
    }
    console.log(sortblog);
    setFilteredBlog(sortblog);

  }

  useEffect(() => {
    console.log("c")
    dispatch(fetchBlogs())
  }, [dispatch])

  const fetchbloglist = () => dispatch(fetchBlogs());


  if (isloading) return <h1 className="text-2xl font-bold text-center"> <Skeleton /> </h1>;
  if (iserror) return <h1 className="text-2xl text-red-600 font-bold text-center">{iserror}</h1>;


  return (

    <div className="min-h-[36rem]">

      <h1 className="text-2xl font-bold text-center mb-6">My Blogs</h1>
      <div className="flex justify-center items-center mb-10">

        <input type="search" name="searchblogs" className="w-1/4 rounded-xs border p-1" placeholder="Search Blogs" onChange={handleSearch} value={searchedblog} />
        <select
          className="mx-10 p-2 border rounded-md bg-blue-500 text-white cursor-pointer"
          onChange={sortbydate}
        >
          <option value="asc">Oldest First</option>
          <option value="desc">Newest First</option>

        </select>
      </div>

      <div className="flex justify-center item-center mb-10">
        <button
          className=" bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => setShowForm(true)}
        >
          Add Blog
        </button>
        {showForm && <BlogForm fetchbloglist={fetchbloglist} closeForm={() => setShowForm(false)} />}
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 px-4">

        {paginatedblog.length > 0 ? (
          paginatedblog.map((blog: blogs) => <CardComponent key={blog.id} blogs={blog} />)
        ) : (
          <p className="text-center text-gray-500">No Blogs Found</p>
        )}
      </div>

      {paginatedblog.length > 0 ? (<div className="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md mt-20 ">
        <button onClick={handleprev} disabled={page === 1} className={`p-2 w-40 ${page === 1 ? 'bg-gray-200' : 'bg-[#3B82F6]'}`}>
          ◀ Prev
        </button>

        <select value={page} className="w-12" id="pagination" onChange={(e) => setPage(Number(e.target.value))}>
          {
            [...Array(Math.ceil(filteredblog.length / blogperpage))].map((_, i) => <option key={i} value={i + 1} >{i + 1}</option>)
          }
        </select>

        <button onClick={handlenext} disabled={page === totalPost} className={`p-2 w-40 ${page === totalPost ? 'bg-gray-200' : 'bg-[#3B82F6]'}`}>
          Next ▶
        </button>
      </div>)
      :""
      }
    </div>
  );
}
