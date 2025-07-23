interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  isHot: boolean;
  discount?: number;
  discountedPrice?: number;
}


export const bestSellersData: Product[] = [
    {
        id:1,
        title: "Freestule Crew Racer leather jacket",
        price: 595.00,
        image: "/Best Sellers/Paste image.svg",
        isHot: true,
        discountedPrice: 476.00,
        discount: 20,
    },
    {
        id:2,
        title: "1996 Retro Nuptse Cashmere Jacket in Gray",
        price: 149.99,
        image: "/Best Sellers/2.svg",
        isHot: true,
    },
    {
        id:3,
        title: "Chilliwack black Bomber HUMANATUR",
        price: 1195.99,
        image: "/Best Sellers/3.svg",
        isHot: true,
    },
    {
        id:4,
        title: "96 Nuptse Dip Dye bomber Jacket",
        price: 400.99,
        image: "/Best Sellers/4.svg",
        isHot: true,
    },
    {
        id:5,
        title: "Oversized real leather harrington jacket in black",
        price: 249.99,
        image: "/Best Sellers/5.svg",
        isHot: true,
    },
    {
        id:6,
        title: "Men's Daimond Quitled Bomber Hoody",
        price: 199.95,
        image: "/Best Sellers/6.svg",
        isHot: true,
    },
    {
        id:7,
        title: "Paradigm Chilliwack coat Black Label",
        price: 1495,
        image: "/Best Sellers/7.svg",
        isHot: true,
    },
    {
        id:8,
        title: "Mens's Torrentshell 3L Rain Jacket in Brown",
        price: 149.00,
        image: "/Best Sellers/8.svg",
        isHot: true,
    }
]