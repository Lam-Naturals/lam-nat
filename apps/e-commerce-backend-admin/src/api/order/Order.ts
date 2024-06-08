import { Customer } from "../customer/Customer";

export type Order = {
  billingAddress: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  orderDate: Date | null;
  orderNumber: number | null;
  paymentMethod: string | null;
  shippingAddress: string | null;
  status?: "Option1" | null;
  total: number | null;
  updatedAt: Date;
};
