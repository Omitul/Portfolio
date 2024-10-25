"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = () => {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animation/code.json",
      });

      return () => animation.destroy();
    }
  }, []);

  return (
    <div
      ref={animationContainer}
      className="flex justify-center items-center w-full transform  md:scale-150"
      style={{ transform: "scale(2.8)" }}
    />
  );
};

export default LottieAnimation;
