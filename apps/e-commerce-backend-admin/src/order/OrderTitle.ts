import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "billingAddress";

export const OrderTitle = (record: TOrder): string => {
  return record.billingAddress?.toString() || String(record.id);
};
