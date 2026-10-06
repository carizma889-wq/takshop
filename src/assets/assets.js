export const navLinks = [
  { id: "home", label: "Home", path: "/" },
  { id: "categories", label: "Categories", path: "/store", hasMegaMenu: true },
  { id: "blog", label: "Blog", path: "/blog" },
  { id: "discounts", label: "Discounts", path: "/store?discount=true" },
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
