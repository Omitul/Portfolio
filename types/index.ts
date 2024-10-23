import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Tproject = {
  _id?: string;
  title: string;
  description: string;
  url: string;
};
