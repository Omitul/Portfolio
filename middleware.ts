import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const secret = process.env.NEXT_PUBLIC_CN;
  const secretV = request.cookies.get(secret as string);

  if (!secretV) {
    console.log("No Secret Found!");
    return NextResponse.redirect(new URL("/loginpage", request.url));
  }
  ///secret thaklei ba janlei tumi dashboard e jaba. noile back to login

  return NextResponse.next();
}

export const config = {
  matcher: ["/loginpage/dashboard"],
};
