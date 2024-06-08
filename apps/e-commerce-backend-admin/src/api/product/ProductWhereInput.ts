import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  featured?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  reviews?: ReviewListRelationFilter;
};
