import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  featured?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
