import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AdminWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastLoginAt?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  password?: StringNullableFilter;
  role?: StringNullableFilter;
  username?: StringNullableFilter;
};
