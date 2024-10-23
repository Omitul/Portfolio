/* eslint-disable no-console */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/order
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { projectModel } from "@/models/project";

export async function POST(request: Request) {
  try {
    const { title, description, url } = await request.json();

    await dbConnect();

    const newProject = new projectModel({
      title,
      description,
      url,
    });

    await newProject.save();

    return NextResponse.json({
      success: true,
      message: "Project created successfully!",
      data: newProject,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create project." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const projects = await projectModel.find();

    return NextResponse.json({
      success: true,
      message: "Projects fetched successfully",
      data: projects,
    });
  } catch (error: any) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
