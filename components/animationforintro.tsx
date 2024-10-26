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
        path: "/animation/codeintro.json",
      });

      return () => animation.destroy();
    }
  }, []);
  const getScaleStyle = () => {
    if (window.innerWidth >= 767) return { transform: "scale(2.0)" };
    return { transform: "scale(2.4)" };
  };
  return (
    <div
      ref={animationContainer}
      className="flex justify-center items-center w-full transform"
      style={getScaleStyle()}
    />
  );
};

export default LottieAnimation;
