"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
const SocialCard = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl font-semibold mt-20 mb-5">
          {" "}
          Social Media Connections
        </h2>
      </div>
      <div className="flex flex-row justify-start gap-x-24">
        <div>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-2 flex-col items-start"></CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl "
                src="https://i.postimg.cc/8cbgvsbq/Linked-In-logo-initials.png"
                width={270}
                height={270}
              />
            </CardBody>
            <Link
              className="font-serif text-center text-blue-600 cursor-pointer hover:text-blue-950"
              href=""
            >
              Let's Connect
            </Link>
          </Card>
        </div>

        <div>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start"></CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://i.postimg.cc/vBqsmLJg/facebook-logo-vector-eps-file-squared-coloured-easily-editable-have-white-background-high-resolution.webp"
                width={270}
                height={270}
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
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start"></CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://i.postimg.cc/WzzhYRfY/github-6980894-960-720.webp"
                width={270}
                height={270}
              />
            </CardBody>
            <Link
              className="font-serif text-center text-blue-600 cursor-pointer hover:text-blue-950"
              href=""
            >
              Join me on GitHub!
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
