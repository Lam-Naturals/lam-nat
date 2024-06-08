import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  helpfulCount?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
