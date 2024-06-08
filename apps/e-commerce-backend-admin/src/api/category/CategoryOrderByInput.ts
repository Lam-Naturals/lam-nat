import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  parentCategory?: SortOrder;
  updatedAt?: SortOrder;
};
