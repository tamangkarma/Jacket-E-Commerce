// data/data.ts

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  isNew?: boolean;
  rating?: number; // optional for stars
}

export const products: Product[] = [
  {
    id: 1,
    title: "96 Nuptse Dip Dye Korea Puffers Jacket",
    image: "/public/Products Carsoul/image1.png",
    price: 400.0,
    isNew: true,
    rating: 5,
  },
  {
    id: 2,
    title: "Paradigm Chilliwack Black Label Jacket",
    image: "/public/Products Carsoul/image2.svg",
    price: 349.99,
    isNew: true,
    rating: 4,
  },
  {
    id: 3,
    title: "1996 Retro Nuptse Jacket in Black",
    image: "/public/Products Carsoul/image3.svg",
    price: 149.99,
    isNew: true,
    rating: 5,
  },
  {
    id: 4,
    title: "Paul Quilted Nylon Puffer bomber jacket",
    image: "/public/Products Carsoul/image4.svg",
    price: 300.0,
    isNew: true,
    rating: 4,
  },
  {
    id: 5,
    title: "Chilliwack jacket HUMANATURE",
    image: "/public/Products Carsoul/image5.svg",
    price: 1195,
    isNew: true,
    rating: 5,
  },
];
