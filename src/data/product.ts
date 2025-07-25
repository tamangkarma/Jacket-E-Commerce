export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  desc?: string;
  isHot?: boolean;
  isNew?: boolean;
  discount?: number;
  discountedPrice?: number;
  rating?: number;

}