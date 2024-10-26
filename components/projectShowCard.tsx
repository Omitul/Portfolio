/* eslint-disable react/self-closing-comp */
/* eslint-disable import/order */
"use client";
import { useEffect, useState } from "react";
import { GetAllProjects } from "@/services/projectservice";
import Projects from "./projectcard";
import { Tproject } from "@/types";

const ProjectShowCard = () => {
  const [projects, setProjects] = useState<Tproject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await GetAllProjects();
        setProjects(response.data);
        console.log(projects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h2 className="text-2xl md:text-5xl  font-medium mt-20 mb-5">
          Projects
        </h2>
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-3 md:gap-x-7">
        {projects?.map((project: Tproject) => (
          <Projects key={project._id} project={project}></Projects>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowCard;
