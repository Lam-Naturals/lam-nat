import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  billingAddress?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  orderNumber?: number | null;
  paymentMethod?: string | null;
  shippingAddress?: string | null;
  status?: "Option1" | null;
  total?: number | null;
};
