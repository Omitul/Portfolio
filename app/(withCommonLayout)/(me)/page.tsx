import React from "react";

import dynamic from "next/dynamic";

const DynamicLottie = dynamic(() => import("@/components/animationLottie"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <DynamicLottie />
    </div>
  );
};

export default page;
