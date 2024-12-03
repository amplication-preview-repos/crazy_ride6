import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AppUserWhereInput = {
  avatar?: JsonFilter;
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
