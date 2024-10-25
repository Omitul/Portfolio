import { Tproject } from "@/types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function Projects({ project }: { project: Tproject }) {
  const { title, url, description, image, live_link } = project;
  return (
    <Card className="max-w-[500px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="flex flex-col">
            <p className="text-xl  text-center font-serif font-semibold mb-2">
              {title}
            </p>
          </div>
          <CardBody className="overflow-visible py-2 px-20 md:px-10">
            <Image
              alt="project pic"
              className="w-[800px] h-[300px] object-cover"
              height={200}
              src={image}
              width={400}
            />
          </CardBody>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="mx-auto">{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex flex-col mx-auto">
          <Link
            isExternal
            showAnchorIcon
            className="mx-auto hover:text-blue-950"
            href={url}
          >
            Visit source code on GitHub
          </Link>
          <Link
            isExternal
            showAnchorIcon
            className="mx-auto hover:text-blue-950 mt-2"
            href={live_link}
          >
            Live Link
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
