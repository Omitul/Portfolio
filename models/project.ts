import { Schema, model } from "mongoose";

type Tproject = {
  title: string;
  description: string;
  url: string;
  image: string;
  live_link: string;
};

const projectSchema = new Schema<Tproject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    live_link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const projectModel = model<Tproject>("Project", projectSchema);
