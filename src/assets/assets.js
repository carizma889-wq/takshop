import { v4 as uuid } from "uuid";
export const navLinks = [
  { id: "home", label: "Home", path: "/" },
  { id: "categories", label: "Categories", hasMegaMenu: true },
  { id: "blog", label: "Blog", path: "/blog" },
  { id: "discounts", label: "Discounts", path: "/#discounts" },
  { id: "about", label: "About Us", path: "/about" },
  { id: "contact", label: "Contact Us", path: "/contact" },
];
export const authButton = { label: "Sign Up / Login", path: "/auth" };
export const megaMenu = {
  viewAll: { label: "View all products", path: "/store" },
  groups: [
    {
      id: "brand",
      title: "Shop by Brand",
      param: "brand",
      items: [
        { label: "Apple", value: "apple" },
        { label: "Samsung", value: "samsung" },
        { label: "Xiaomi", value: "xiaomi" },
        { label: "Huawei", value: "huawei" },
        { label: "Honor", value: "honor" },
        { label: "Realme", value: "realme" },
        { label: "Nokia", value: "nokia" },
      ],
    },
    {
      id: "price",
      title: "Shop by Price",
      param: "price",
      items: [
        { label: "Under 5 million Toman", value: "0-5" },
        { label: "5 to 7 million Toman", value: "5-7" },
        { label: "7 to 10 million Toman", value: "7-10" },
        { label: "10 to 15 million Toman", value: "10-15" },
        { label: "15 to 20 million Toman", value: "15-20" },
        { label: "20 to 30 million Toman", value: "20-30" },
        { label: "Over 30 million Toman", value: "30-" },
      ],
    },
    {
      id: "performance",
      title: "Shop by Performance",
      param: "use",
      items: [],
    },
  ],
};

export const categoryBanners = [
  {
    id: "laptops",
    img: "/images/image_swipper(1).png",
    alt: "Gaming laptops",
    href: "/category/laptops",
  },
  {
    id: "smartphones1",
    img: "/images/image_swipper(2).png",
    alt: "Latest smartphones",
    href: "/category/smartphones",
  },
  {
    id: "smartphones2",
    img: "/images/image_swipper(3).png",
    alt: "Latest smartphones",
    href: "/category/smartphones",
  },
  {
    id: "smartphones3",
    img: "/images/image_swipper(4).png",
    alt: "Latest smartphones",
    href: "/category/smartphones",
  },
  {
    id: "smartphones4",
    img: "/images/image_swipper(5).png",
    alt: "Latest smartphones",
    href: "/category/smartphones",
  },
  {
    id: "smartphones5",
    img: "/images/image_swipper(6).png",
    alt: "Latest smartphones",
    href: "/category/smartphones",
  },
  {
    id: "smartphones6",
    img: "/images/image_swipper(7).png",
    alt: "Latest smartphones",
    href: "/category/smartphones",
  },
  {
    id: "smartphones7",
    img: "/images/image_swipper(8).png",
    alt: "Latest smartphones",
    href: "/category/smartphones",
  },
];

export const data = [
  { id: uuid(), name: "phone", img: "/products/phone(1).png" },
  { id: uuid(), name: "lap top", img: "/products/laptop(1).png" },
  {
    id: uuid(),
    name: "Supplements",
    img: "/products/PlayStationController(1).png",
  },
  {
    id: uuid(),
    name: "Headphones and headsets",
    img: "/products/earphone(1).png",
  },
  {
    id: uuid(),
    name: "camera",
    img: "/products/camera(1).png",
  },
  {
    id: uuid(),
    name: "Internet",
    img: "/products/Router(1).png",
  },
  {
    id: uuid(),
    name: "Smart watch",
    img: "/products/smartwatch(1).png",
  },
];
