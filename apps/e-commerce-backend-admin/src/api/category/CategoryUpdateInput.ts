import { InputJsonValue } from "../../types";
import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  parentCategory?: string | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
};
