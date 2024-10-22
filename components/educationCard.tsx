import Image from "next/image";
import React from "react";

const EducationCard = () => {
  return (
    <div>
      <h1 className="text-5xl font-medium">Education</h1>

      <div className="flex flex-row gap-x-4 justify-start items-center mt-4">
        <div className="mt-3">
          <Image
            src="https://i.postimg.cc/3Jsbh2Q9/Logo-of-Comilla-University.png"
            alt="University Logo"
            width={100}
            height={100}
          ></Image>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Comilla University</h2>
          <h4 className="text-2xl font-semibold">
            B.Sc (Engg) in Computer Science and Engineering
          </h4>
          <p className="text-xl font-serif">January 2019 - January 2023</p>
        </div>
      </div>

      <div className="flex flex-row gap-x-4 justify-start items-center mt-4">
        <div className="mt-3">
          <Image
            src="https://i.postimg.cc/Fsxg2kmk/images.png"
            alt="University Logo"
            width={100}
            height={100}
          ></Image>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Brahmanbaria Govt. College</h2>
          <h4 className="text-2xl font-semibold">Higher Secondary</h4>
          <p className="text-xl font-semibold">Science</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
