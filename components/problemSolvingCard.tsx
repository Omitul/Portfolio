"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

const ProblemSolvingCard = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl md:text-5xl font-medium mt-20 mb-5">
          {" "}
          Problem Solving Activities
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-x-24">
        <div>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-2 flex-col items-start" />
            <CardBody className="overflow-visible py-2 px-20 md:px-10">
              <Image
                alt="Card background"
                className="object-cover rounded-xl "
                height={270}
                src="https://i.postimg.cc/R0G7NNXJ/zruiknbedz8yqafxbazb.webp"
                width={270}
              />
            </CardBody>
            <Link
              className="font-serif text-center text-blue-600 cursor-pointer hover:text-blue-950"
              href=""
            >
              Profile
            </Link>
          </Card>
        </div>

        <div>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start" />
            <CardBody className="overflow-visible py-2 px-20 md:px-10">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                height={270}
                src="https://i.postimg.cc/tTKNH8BB/Leet-Code-Sharing.png"
                width={270}
              />
            </CardBody>
            <Link
              className="font-serif text-center text-blue-600 cursor-pointer hover:text-blue-950"
              href=""
            >
              Profile
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolvingCard;
