import { useEffect, useState } from "react";
import CardComponent from "../CardComponent";
import axios from "axios";

// type apiProps={
//   id: number;
//   title: string;
//   body: string;
// }
export default function BlogPage() {
  const [Blog, setBlog] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data)
      setBlog(response.data.slice(0,10))
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 px-4">
      {
        Blog.length > 0 ?
          (Blog.map((blogs, index) => <CardComponent key={index} blogs={blogs} />)) : (
            <p>Loading....</p>
          )
      }
</div>

    </div>
  )

}