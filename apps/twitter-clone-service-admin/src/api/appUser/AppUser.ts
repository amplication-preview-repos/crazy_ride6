import { JsonValue } from "type-fest";

export type AppUser = {
  avatar: JsonValue;
  bio: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  updatedAt: Date;
  username: string | null;
};
