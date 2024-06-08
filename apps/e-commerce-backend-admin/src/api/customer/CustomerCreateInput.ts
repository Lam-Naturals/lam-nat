import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { ReviewCreateNestedManyWithoutCustomersInput } from "./ReviewCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  password?: string | null;
  phoneNumber?: string | null;
  reviews?: ReviewCreateNestedManyWithoutCustomersInput;
};
