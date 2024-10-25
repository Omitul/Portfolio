"use client";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@nextui-org/button";
import { BlogPost } from "@/services/blogservice";
import Swal from "sweetalert2";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const postData = { title, image: imageLink, content };
    console.log(postData);
    const res = await BlogPost(postData);
    if (res?.success) {
      Swal.fire({
        icon: "success",
        text: "Blog Created Successfully",
      });
      setTitle("");
      setContent("");
      setImageLink("");
    } else {
      Swal.fire({
        icon: "error",
        text: "Failed to post the blog!",
      });
    }
  };

  return (
    <div className="mt-40">
      <h2 className="text-3xl mb-6 font-semibold">Create a Blog...</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="mr-2 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          placeholder="Image Link"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
        />

        <Editor
          apiKey={process.env.NEXT_PUBLIC_API_KEY_TINYMCE}
          init={{
            height: 400,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | styleselect | bold italic backcolor | " +
              "alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | link image | code",
          }}
          onEditorChange={(newValue) => setContent(newValue)}
        />
        <Button
          className="bg-blue-400 rounded-sm"
          size="md"
          type="submit"
          variant="shadow"
        >
          Create Post
        </Button>
      </form>
    </div>
  );
}
