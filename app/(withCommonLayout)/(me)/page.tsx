import React from "react";

import dynamic from "next/dynamic";
import Introcard from "@/components/introCard";
import Contact from "@/components/contactMeCard";

const DynamicLottie = dynamic(() => import("@/components/animationLottie"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        <div>
          <Introcard />
        </div>
        <div>
          <DynamicLottie />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default page;
