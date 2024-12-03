import { InputJsonValue } from "../../types";

export type AppUserUpdateInput = {
  avatar?: InputJsonValue;
  bio?: string | null;
  email?: string | null;
  password?: string | null;
  username?: string | null;
};
