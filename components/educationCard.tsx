import Image from "next/image";
import React from "react";

const EducationCard = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-medium mt-20">Education</h1>

      <div className="flex flex-row gap-x-4 justify-start items-center mt-4">
        <div className="mt-3">
          <Image
            alt="University Logo"
            height={100}
            src="https://i.postimg.cc/3Jsbh2Q9/Logo-of-Comilla-University.png"
            width={100}
          />
        </div>
        <div>
          <h2 className=" md:text-3xl font-semibold">Comilla University</h2>
          <h4 className=" md:text-2xl font-semibold">
            B.Sc (Engg) in Computer Science and Engineering
          </h4>
          <p className="md:text-xl font-serif">January 2019 - January 2023</p>
        </div>
      </div>

      <div className="flex flex-row gap-x-4 justify-start items-center mt-4">
        <div className="mt-3">
          <Image
            alt="college Logo"
            className="rounded-full object-cover responsive-image"
            height={50}
            src="https://i.postimg.cc/Fsxg2kmk/images.png"
            width={100}
          />
        </div>
        <div>
          <h2 className=" md:text-3xl font-semibold">
            Brahmanbaria Govt. College
          </h2>
          <h4 className=" md:text-2xl font-semibold">Higher Secondary</h4>
          <p className=" font-semibold">Science</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
