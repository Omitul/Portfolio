import React from "react";
import dynamic from "next/dynamic";

import Introcard from "@/components/introCard";
import Contact from "@/components/contactMeCard";
import SkillSetCard from "@/components/skillSetCard";
import EducationCard from "@/components/educationCard";
import SocialCard from "@/components/socialCard";
import ProblemSolvingCard from "@/components/problemSolvingCard";
import ProjectShowCard from "@/components/projectShowCard";
import IotProject from "@/components/IotProject";

const DynamicLottieForIntro = dynamic(
  () => import("@/components/animationforintro"),
  {
    ssr: false,
  }
);

const DynamicLottieForSkills = dynamic(
  () => import("@/components/animationForSkills"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        <div>
          <Introcard />
        </div>
        <div>
          <DynamicLottieForIntro />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <DynamicLottieForSkills />
        <SkillSetCard />
      </div>

      <div className="mb-4">
        <EducationCard />
      </div>

      <SocialCard />
      <ProblemSolvingCard />

      <ProjectShowCard />
      <IotProject />

      <Contact />
    </div>
  );
};

export default page;
