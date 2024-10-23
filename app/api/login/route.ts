/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

import dbConnect from "@/lib/db";
import { UserModel } from "@/models/user";

// Rename this function to 'POST' to handle POST requests
export async function POST(request: Request) {
  const { email, password } = await request.json(); // Extract email and password from request body

  await dbConnect();

  const user = await UserModel.findOne({ email });

  if (!user) {
    console.log("User not found");

    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    message: "Login successful!",
    data: user,
  });
}
