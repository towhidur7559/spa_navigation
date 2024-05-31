import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogsCard from "../components/BlogsCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    }, []);

     const handleDelete = (id) =>{
        deleteBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    }
    if (blogs.length <1) return <EmptyState message='No Bookmarks Available!' address={'/blogs'} label='Go To Blogs'></EmptyState>
    return (
        <div className="grid px-4 sm:px-8 py-8 lg:px-12 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {
                blogs.map((blog) => <BlogsCard handleDelete={handleDelete} deletable={true} blog={blog} key={blog.id}></BlogsCard>)

            }

        </div>
    );
};

export default Bookmarks;