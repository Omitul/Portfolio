"use client";

import { Button } from "@nextui-org/button";

const Introcard = () => {
  return (
    <div className="gap-y-10">
      <h1 className="text-7xl font-bold w-full mb-4">Hi, I'm Omitul Islam</h1>
      <p className="text-3xl text-gray-500 mb-4">
        Problem Solver | Web Technology Enthusiast | 3* at codeshef (max: 1788)
        | Expert in Data Structures, Algorithms & OOP | MERN
      </p>
      <Button
        onClick={() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="bg-blue-500 font-semibold"
      >
        CONTACT ME
      </Button>
    </div>
  );
};

export default Introcard;
