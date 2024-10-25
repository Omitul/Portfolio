import { Schema, model } from "mongoose";

type blog = {
  _id?: string;
  title: string;
  image: string;
  content: string;
};

const BlogSchema = new Schema<blog>(
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

const BlogModel = model<blog>("Blog", BlogSchema);

export default BlogModel;
