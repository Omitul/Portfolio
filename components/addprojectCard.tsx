/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
"use client";

import { ProjectPost } from "@/services/projectservice";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProjectAdd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [live_link, setLive_link] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const projectData = { title, description, url, image, live_link };
      const data = await ProjectPost(projectData);
      if (data.success) {
        toast.success(data.message);
        setTitle("");
        setDescription("");
        setUrl("");
        setImage("");
        setLive_link("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred while creating the project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto w-1/2">
      <h1 className="text-2xl font-semibold text-center">Dashboard</h1>
      <h4 className="text-xl font-serif font-semibold text-green-500 mt-5">
        Add New Project
      </h4>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="title"
          >
            Project Title
          </label>
          <input
            required
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Project Description
          </label>
          <textarea
            required
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="url"
          >
            Project URL
          </label>
          <input
            required
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            id="url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="url"
          >
            Image Link
          </label>
          <input
            required
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            id="image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="url"
          >
            Live Link
          </label>
          <input
            required
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            id="live_link"
            type="url"
            value={live_link}
            onChange={(e) => setLive_link(e.target.value)}
          />
        </div>
        <button
          className={`w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
          type="submit"
        >
          {loading ? "Creating..." : "Add Project"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
