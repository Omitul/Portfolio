"use client";

import { Tblog } from "@/types";
/* eslint-disable padding-line-between-statements */
export const BlogPost = async (payload: Tblog) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "post failed");
  }

  return await response.json();
};

export const GetAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/blog`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    const take = await res.json();
    throw new Error(take.message || "Failed to fetch");
  }
  const data = await res.json();
  console.log(data);

  return data;
};

export const GetSingleBlog = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/blog/${id}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const data = await res.json();
  console.log("resssssssssssss", data);

  return data;
};

export const DeleteBlog = async (id: string) => {
  console.log("id", id);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/blog/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Delete failed");
  }

  return await response.json();
};

export const UpdateBlog = async (id: string, payload: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/blog/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Update failed");
  }

  return await response.json();
};
