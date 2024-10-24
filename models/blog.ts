import { Schema, model } from "mongoose";

type Tblog = {
  title: string;
  image: string;
  content: string;
};

const BlogSchema = new Schema<Tblog>(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const BlogModel = model<Tblog>("Blog", BlogSchema);
