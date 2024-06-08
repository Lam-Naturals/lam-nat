import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  helpfulCount?: number | null;
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
};
