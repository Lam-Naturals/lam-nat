import { InputJsonValue } from "../../types";
import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  parentCategory?: string | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
};
