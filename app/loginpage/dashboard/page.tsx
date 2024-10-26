"use client";

import ProjectAdd from "@/components/addprojectCard";
import CreateBlog from "@/components/createBlog";
import HandleUpdateDeleteProject from "@/components/modalUpdateDeleteProject";
import { Button } from "@nextui-org/button";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const handleLogout = () => {
    const secret = process.env.NEXT_PUBLIC_CN;
    Cookies.remove(secret!);
    toast.success("Logout Successfully!");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const handleBackToHome = () => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Button className="bg-blue-600 mt-2 ml-2" onClick={handleBackToHome}>
            {" "}
            Back
          </Button>
        </div>
        <div className="flex justify-end">
          <Button className="bg-red-600 mt-2 mr-2" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
      <ProjectAdd />
      <HandleUpdateDeleteProject />
      <CreateBlog />
      <ToastContainer transition={Slide} />
    </div>
  );
};

export default Dashboard;
