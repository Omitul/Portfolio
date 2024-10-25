/* eslint-disable react/self-closing-comp */
/* eslint-disable import/order */
"use client";
import { useEffect, useState } from "react";
import { Tblog } from "@/types";
import BlogCard from "./blogCard";
import { GetAllBlogs } from "@/services/blogservice";

const BlogsShow = () => {
  const [Blogs, setBlogs] = useState<Tblog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await GetAllBlogs();
        setBlogs(response.data);
        console.log(Blogs);
      } catch (error) {
        console.error("Failed to fetch Blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h2 className="text-5xl font-medium mt-20 mb-5">Blogs</h2>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {Blogs?.map((blog: Tblog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogsShow;
