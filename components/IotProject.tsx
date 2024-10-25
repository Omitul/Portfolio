/* eslint-disable react/jsx-sort-props */
"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function IotProject() {
  return (
    <div>
      <div>
        <h2 className="text-2xl md:text-5xl font-medium mt-20 mb-5">
          IOT Project
        </h2>
      </div>
      <Card className="max-w-[500px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col justify-center items-center mx-auto">
            <div className="flex flex-col">
              <p className="text-xl  text-center font-serif font-semibold mb-2">
                Location Tracker
              </p>
            </div>
            <div className="flex justify-center items-center max-w-full">
              <Image
                alt="IOT project device pic"
                src="https://i.postimg.cc/4NMTtwRk/iot.jpg"
                height={300}
                width={800}
                className="w-[800px] h-[300px] object-cover"
              />
            </div>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="mx-auto">This is an IOT project</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/Omitul/Location-Tracker"
            className="mx-auto hover:text-blue-950"
          >
            Visit source code on GitHub
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
