// const addBlog = async (newBlog: blogs) => {
//     try {
//         const response = await axios.post("http://localhost:5000/blogs", newBlog);
//         setblogList(prevBlogs => [...prevBlogs, response.data]);
//     } catch (error) {
//         console.error("Error adding blog:", error);
//     }
// };


// const deleteBlog = async (id: number) => {
//     try {
//         await axios.delete(`http://localhost:5000/blogs/${id}`);
//         setblogList(bloglist => bloglist.filter(blog => Number(blog.id) !== id));
//         navigate("/Blog")
//         alert("Delete blog successfully")
//     } catch (error) {
//         console.error("Error deleting blog:", error);
//     }
// };


// const deleteUser = async (id: string) => {
//     try {
//         await axios.delete(`http://localhost:5000/users/${id}`)
//         setUserList(userlist => userlist.filter(user => user.id !== id))
//         navigate("/UserListPage");
//         alert("Delete User successfully");
//     } catch (error) {
//         console.error("Error deleting user:", error);
//     }
// }