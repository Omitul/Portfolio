"use client";

import { Button } from "@nextui-org/button";

const handleDownload = (e: React.MouseEvent) => {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = "/resume/test.pdf";
  link.download = "Resume_Omitul_CoU.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Introcard = () => {
  return (
    <div className="relative z-10">
      <h1 className="text-2xl md:text-7xl font-bold mb-4">
        Hi, I&apos;m Omitul Islam
      </h1>
      <p className="text-medium md:text-3xl text-gray-500 mb-4">
        Problem Solver | Web Technology Enthusiast | 3* at codeshef (max: 1788)
        | Expert in Data Structures, Algorithms & OOP | MERN
      </p>
      <div className="flex flex-row gap-x-5 md:mt-5 items-center">
        <Button
          className="bg-blue-500 font-semibold text-xs md:text-base md:px-3"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          CONTACT ME
        </Button>
        <Button
          className="bg-red-400 font-semibold hover:bg-red-500 md:px-3 text-xs md:text-base"
          href=""
          onClick={handleDownload}
        >
          RESUME
        </Button>
      </div>
    </div>
  );
};

export default Introcard;
