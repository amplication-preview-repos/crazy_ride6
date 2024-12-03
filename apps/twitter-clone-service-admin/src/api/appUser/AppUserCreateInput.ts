import { InputJsonValue } from "../../types";

export type AppUserCreateInput = {
  avatar?: InputJsonValue;
  bio?: string | null;
  email?: string | null;
  password?: string | null;
  username?: string | null;
};
