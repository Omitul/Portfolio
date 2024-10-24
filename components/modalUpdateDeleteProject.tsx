/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-undef */
"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Image from "next/image";

import { GetAllProjects } from "@/services/projectservice"; // Import the service function
import { DeleteProject, UpdateProject } from "@/services/projectservice";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Tproject } from "@/types";

const ModalUpdateAndDeleteProject = ({ project }: { project: Tproject }) => {
  const [Project, setProject] = useState<Tproject>();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    title: project?.title,
    description: project?.description,
    url: project?.url,
    image: project?.image,
    live_link: project?.live_link,
  });

  useEffect(() => {
    setProject(project); //ensuring every render e jate updated data set hoye jaai
  }, []);

  const handleUpdate = async () => {
    try {
      const res = await UpdateProject(project._id as string, formData);
      onOpenChange();
      if (res.success) {
        setProject((prev) => ({
          ...prev,
          ...formData,
        }));
        Swal.fire({
          icon: "success",
          text: "Updated Successfully",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (isConfirmed) {
      try {
        const res = await DeleteProject(project._id as string);
        if (res.success) {
          console.log("Deleted");
          Swal.fire({
            icon: "success",
            text: "Deleted Successfully",
          });

          console.log(res);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h3 className="text-sky-950 text-2xl font-serif">{Project?.title}</h3>
      <Image
        alt="Image of the project"
        height={100}
        src={Project?.image!}
        width={100}
      />

      <div className=" flex flex-row gap-x-2 mt-2">
        <div>
          <Button color="primary" size="sm" onPress={onOpen}>
            Update
          </Button>
        </div>
        <div>
          <Button color="danger" size="sm" onPress={handleDelete}>
            Delete
          </Button>
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Update Project</ModalHeader>
              <ModalBody>
                <div className="flex flex-row gap-x-2">
                  <label className="font-semibold" htmlFor="">
                    Title:
                  </label>
                  <input
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-row gap-x-2">
                  <label className="font-semibold" htmlFor="">
                    Description:
                  </label>
                  <input
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-row gap-x-2">
                  <label className="font-semibold" htmlFor="">
                    Project URL:
                  </label>
                  <input
                    placeholder="URL"
                    value={formData.url}
                    onChange={(e) =>
                      setFormData({ ...formData, url: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-row gap-x-2">
                  <label className="font-semibold" htmlFor="">
                    Image Link:
                  </label>
                  <input
                    placeholder="Image"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-row gap-x-2">
                  <label className="font-semibold" htmlFor="">
                    Live-Link:
                  </label>
                  <input
                    placeholder="Live-Link"
                    value={formData.live_link}
                    onChange={(e) =>
                      setFormData({ ...formData, live_link: e.target.value })
                    }
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleUpdate}>
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

const HandleUpdateDeleteProject = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await GetAllProjects();
        console.log(data, "daaaaaaaaaaaaaaaata");
        setProjects(data.data);
      } catch (error) {
        console.error(error);
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
      <h2 className="text-3xl font-medium mt-20 mb-5">Manage Projects</h2>
      <div className="grid grid-cols-4 gap-y-2">
        {projects.map((project) => (
          <ModalUpdateAndDeleteProject key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HandleUpdateDeleteProject;
