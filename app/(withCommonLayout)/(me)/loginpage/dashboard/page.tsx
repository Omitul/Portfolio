import ProjectAdd from "@/components/addprojectCard";
import HandleUpdateDeleteProject from "@/components/modalUpdateDeleteProject";

const Dashboard = () => {
  return (
    <div>
      <ProjectAdd />
      <HandleUpdateDeleteProject />
    </div>
  );
};

export default Dashboard;
