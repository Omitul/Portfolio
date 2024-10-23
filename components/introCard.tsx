"use client";

import { Button } from "@nextui-org/button";

const Introcard = () => {
  return (
    <div className="gap-y-10">
      <h1 className="text-7xl font-bold w-full mb-4">
        Hi, I&apos;m Omitul Islam
      </h1>
      <p className="text-3xl text-gray-500 mb-4">
        Problem Solver | Web Technology Enthusiast | 3* at codeshef (max: 1788)
        | Expert in Data Structures, Algorithms & OOP | MERN
      </p>
      <Button
        className="bg-blue-500 font-semibold"
        onClick={() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        CONTACT ME
      </Button>
    </div>
  );
};

export default Introcard;
