import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Tproject = {
  _id?: string;
  title: string;
  description: string;
  image: string;
  url: string;
  live_link: string;
};

export type Tblog = {
  _id?: string;
  title: string;
  image: string;
  content: string;
};
