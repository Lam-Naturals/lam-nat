import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Review } from "../review/Review";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  featured: string | null;
  id: string;
  images: JsonValue;
  name: string | null;
  price: number | null;
  quantity: number | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
