# TakShop

A responsive e-commerce storefront for computers and electronics, built with React and Tailwind CSS. The UI is implemented from the **E-commerce Website Design (TakShop)** Figma Community file, with light and dark themes.

> Work in progress.

## Preview

<!-- Add screenshots here, e.g. ![Home](./docs/home.png) -->

## Pages

| Area         | Pages                                                            |
| ------------ | ---------------------------------------------------------------- |
| Main         | Home, Laptop, Store, Product, Shop                               |
| Content      | Blog, Contact us, About us                                       |
| User account | Personal info, Notifications, Favorites, Comments, Orders, Gifts |

## Shared building blocks

- **Layout:** Menu (navbar), Footer, Breadcrumb, account sidebar
- **UI:** product card, discount badge, quantity selector, like/dislike, theme toggle
- **Sections:** hero slider, categories, brands, banner, blog posts, FAQ, similar products, reviews

## Tech stack

- [React](https://react.dev/) with the React Compiler
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

More libraries (state management, slider, forms, backend) will be added as each part of the site is built.

## Getting started

```bash
git clone https://github.com/<your-username>/takshop.git
cd takshop
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run the linter
```

## Project structure

```
src/
├── assets/
├── components/
│   ├── layout/      Menu, Footer, Breadcrumb
│   ├── ui/          ProductCard, Quantity, ThemeToggle, ...
│   └── sections/    Hero, Category, Brands, FAQ, ...
├── pages/
│   └── account/     Personal, Notification, Favorite, Comments, Orders, Gift
├── data/
├── hooks/
├── routes/
├── App.jsx
└── main.jsx
```

## Roadmap

- [ ] Project setup and routing
- [ ] Shared layout (Menu, Footer, Breadcrumb)
- [ ] Home page
- [ ] Laptop, Store, Product and Shop pages
- [ ] Cart and favorites
- [ ] Account pages
- [ ] Blog, Contact us and About us
- [ ] Light/dark theme
- [ ] Responsive (tablet and mobile)
- [ ] Backend and authentication

## Design credit

The design comes from the _E-commerce Website Design (TakShop)_ file on Figma Community. All design rights belong to its original author. Check the license shown on the Figma Community page before using this project commercially.

## License

Copyright (c) 2026 Abdullah Nader. All rights reserved.

This source code is proprietary. No permission is granted to copy, modify, distribute, or use it, in whole or in part, without written permission from the author. The Figma design is not covered by this notice and remains the property of its original author (see Design credit).
