"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimationWork = () => {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animation/work.json",
      });

      return () => animation.destroy();
    }
  }, []);

  return (
    <div
      ref={animationContainer}
      className="flex justify-center items-center min-h-screen"
    ></div>
  );
};

export default LottieAnimationWork;