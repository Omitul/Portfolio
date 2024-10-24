import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { projectModel } from "@/models/project";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { title, description, url } = await request.json();
    await dbConnect();

    const updatedProject = await projectModel.findByIdAndUpdate(
      params.id,
      { title, description, url },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      message: "Project updated successfully!",
      data: updatedProject,
    });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update project." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    await projectModel.findByIdAndDelete(params.id);

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully!",
    });
  } catch (error) {
    console.log("paramsssssssssssssssssss", params);

    console.error("Error deleting project:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete project." },
      { status: 500 }
    );
  }
}
