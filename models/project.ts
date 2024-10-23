import { Schema, model } from "mongoose";

type Tproject = {
  title: string;
  description: string;
  url: string;
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
  },
  {
    timestamps: true,
  }
);

export const projectModel = model<Tproject>("Project", projectSchema);
