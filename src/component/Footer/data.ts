interface FooterPageDataType {
    id: number;
    title: string;
    link?: string; // optional, as some items may not have a link
}

export const FooterPageData: FooterPageDataType[] = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "Shop",
        link: "/shop"
    },
    {
        id: 3,
        title: "Product",
        link: "/product"
    },
    {
        id: 4,
        title: "Articles",
    },
    {
        id: 5,
        title: "Contact Us",
        link: "/contact"
    },
]


interface FooterSocialDataType {
    id: number;
    image: string;
}


export const FooterSocailData: FooterSocialDataType[] = [
    {
        id:1,
        image: "/Social Media/instagram.svg",
    },
    {
        id:2,
        image: "/Social Media/facebook.svg",
    },
    {
        id:3,
        image: "/Social Media/youtube.svg",

    },
    
]

interface FooterInfoDataType {
    id: number;
    title: string;
}

export const FooterInfoData:FooterInfoDataType[] = [
    {
        id: 1,
        title: "Shipping Policy",
    },
    {
        id:2,
        title: "Return & Refund"
    },
    {
        id: 3,
        title: "Support"
    },
    {
        id: 4,
        title: "FAQs"
    }
]

interface FooterBottomDataType {
    id: number;
    image: string;
}

export const FooterBottomData: FooterBottomDataType[] = [
    {
        id:1,
        image: "/Payment/Visa.svg",
    },
    {
        id:2,
        image: "/Payment/american Express.svg",
    },
    {
        id:3,
        image: "/Payment/mastercard.svg",
    },
    {
        id:4,
        image: "/Payment/paypal.svg",
    },
    {
        id:5,
        image: "/Payment/googlePay.svg",
    },
    {
        id:6,
        image: "/Payment/stripe.svg",
    }
]