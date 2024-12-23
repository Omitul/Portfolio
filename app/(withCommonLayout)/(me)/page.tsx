"use client";

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
import BlogsShow from "@/components/blogShowCard";

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
      <div className="flex flex-col-reverse  md:flex-row gap-x-3 md:gap-x-0 justify-center items-center mt-10 md:mt-20">
        <div id="intro">
          <Introcard />
        </div>
        <div className="mb-28 md:mb-44">
          <DynamicLottieForIntro />
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row  justify-center items-center mt-20"
        id="skills"
      >
        <DynamicLottieForSkills />
        <SkillSetCard />
      </div>

      <div className="mb-4" id="education">
        <EducationCard />
      </div>
      <div id="social">
        <SocialCard />
      </div>
      <div id="problem-solving">
        <ProblemSolvingCard />
      </div>
      <div id="project-show">
        <ProjectShowCard />
      </div>
      <div id="iot">
        <IotProject />
      </div>
      <div id="blog-show">
        <BlogsShow />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default page;
