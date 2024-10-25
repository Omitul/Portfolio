import dbConnect from "@/lib/db";
import BlogModel from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await dbConnect();

  try {
    const blog = await BlogModel.findById(id);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    //paisi
    return NextResponse.json({
      success: true,
      message: "Blog fetched successfully",
      data: blog,
    });
  } catch (error: any) {
    console.error("Error fetching Blog:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch Blog", error: error.message },
      { status: 500 }
    );
  }
}
