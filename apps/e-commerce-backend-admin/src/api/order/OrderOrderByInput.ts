import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  billingAddress?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  orderNumber?: SortOrder;
  paymentMethod?: SortOrder;
  shippingAddress?: SortOrder;
  status?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
