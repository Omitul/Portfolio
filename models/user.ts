import { model, Schema, models } from "mongoose";

export type Tuser = {
  email: string;
  password: string;
};

const UserSchema = new Schema<Tuser>({
  email: { type: String, required: true, unique: true },
  password: { type: String },
});

// Check if the model is already defined to prevent overwriting
export const UserModel = models.user || model<Tuser>("user", UserSchema);
