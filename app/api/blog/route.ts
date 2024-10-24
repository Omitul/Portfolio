/* eslint-disable no-console */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/order
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { BlogModel } from "@/models/blog";

export async function POST(request: Request) {
  try {
    const { title, image, content } = await request.json();

    await dbConnect();

    const newBlog = new BlogModel({
      title,
      image,
      content,
    });

    await newBlog.save();

    return NextResponse.json({
      success: true,
      message: "Blog created successfully!",
      data: newBlog,
    });
  } catch (error) {
    console.error("Error creating Blog:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create blog." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const Blog = await BlogModel.find();

    return NextResponse.json({
      success: true,
      message: "Blogs fetched successfully",
      data: Blog,
    });
  } catch (error: any) {
    console.error("Error fetching Blogs:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch Blogs" },
      { status: 500 }
    );
  }
}
