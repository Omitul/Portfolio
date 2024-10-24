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
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="flex flex-col">
            <p className="text-xl  text-center font-serif font-semibold mb-2">
              {title}
            </p>
          </div>
          <div className="flex justify-center items-center max-w-full">
            <Image
              alt="IOT project device pic"
              className="w-[800px] h-[300px] object-cover"
              height={200}
              src={image}
              width={400}
            />
          </div>
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
