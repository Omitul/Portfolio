"use client";
import { GetSingleBlog } from "@/services/blogservice";
import parse from "html-react-parser";
import { Tblog } from "@/types";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Blogpage() {
  const [blog, setBlog] = useState<Tblog>();
  const params = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      const { id } = params;
      const res = await GetSingleBlog(id as string);
      console.log(res);
      if (res) {
        setBlog(res.data);
      }
    };

    fetchBlog();
  }, []);

  if (!blog) return <p>Loading...</p>;
  return (
    <div>
      <Card className="max-w-full p-20 shadow-lg">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://nextui.org/avatars/avatar-1.png"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Omitul Islam
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                fa6164781@gmail.com
              </h5>
            </div>
          </div>
        </CardHeader>
        <CardHeader>
          <h2 className="mt-2 text-3xl font-serif font-bold">{blog.title}</h2>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          {blog.image && (
            <Image alt="image" height={300} src={blog.image} width={1000} />
          )}
          <p className="p-2 text-start  text-gray-600  text-xl">
            {parse(blog.content)}
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
