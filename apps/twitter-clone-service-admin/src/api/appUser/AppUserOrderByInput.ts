import { SortOrder } from "../../util/SortOrder";

export type AppUserOrderByInput = {
  avatar?: SortOrder;
  bio?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
