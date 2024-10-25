import React from "react";
import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";
import { Tblog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
export default function BlogCard({ blog }: { blog: Tblog }) {
  const { image, title, content } = blog;
  return (
    <Card className="max-w-[500px]">
      <CardHeader>
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://i.postimg.cc/QtjQz37L/man-dummy.webp"
          />
          <div className="flex flex-col">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Omitul Islam
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                fa6164781@gmail.com
              </h5>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardHeader>
        <h2 className="text-2xl font-serif font-bold text-start  tracking-tight">
          {title}
        </h2>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <Image
          alt="image"
          className="w-[800px] h-[300px] object-cover mx-auto"
          height={200}
          src={image}
          width={400}
        />
        <p className="py-4 text-gray-600 text-medium">
          <div className="flex flex-row">
            <div> {parse(content.slice(0, 50))}</div>
            <div>
              <span>
                <Link
                  className="text-blue-500 hover:underline mb-2"
                  href={`/blog/${blog._id}`}
                >
                  See More...
                </Link>
              </span>
            </div>
          </div>
        </p>
      </CardBody>
    </Card>
  );
}
