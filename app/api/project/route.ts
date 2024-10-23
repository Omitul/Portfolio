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
