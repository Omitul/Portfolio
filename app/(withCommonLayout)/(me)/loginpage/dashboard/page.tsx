import ProjectAdd from "@/components/addprojectCard";
import CreateBlog from "@/components/createBlog";
import HandleUpdateDeleteProject from "@/components/modalUpdateDeleteProject";

const Dashboard = () => {
  return (
    <div>
      <ProjectAdd />
      <HandleUpdateDeleteProject />
      <CreateBlog />
    </div>
  );
};

export default Dashboard;
