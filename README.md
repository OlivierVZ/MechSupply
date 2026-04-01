![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-1E1E1E?style=for-the-badge&logo=javascript)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
# MechSupply

**MechSupply** is a frontend-only webshop demo built to practice **React, React Router, and SCSS**.  
It demonstrates a typical product-list → cart → checkout flow with a small admin panel for product management.  
All data is persisted in the browser's **localStorage**, making it a fully functional demo without a backend.

A demo of the website can be viewed on this url(https://oliviervz.github.io/MechSupply/)

## Overview

- **Location**: the app code is inside the `MechSupply/` directory at the repository root.
- **Stack**: React + Vite, React Router, Bootstrap (CSS + icons), SCSS for styles.
- **Features**: product listing, search and filter, shopping cart with increase/decrease/remove, order submission (saved to localStorage), and a small admin panel to manage products.

## Quick start (run locally)

1. Install dependencies (from the `MechSupply/` folder):
  
   ```powershell
   npm install
   ```

2. Start the dev server:

   ```powershell
   npm run dev
   ```

3. Open the app in your browser using the URL the dev server prints (usually http://localhost:5173).

## Useful routes

- `/` — Home page (contains the product carousel)
- `/products` — Product listing (search + category filter)
- `/cart` — Shopping cart and checkout
- `/success` — Order success/confirmation page
- `/admin-login` — Admin login (fake/simple)
- `/admin` — Admin panel (view orders & manage products)

## Admin (fake login)

This project includes a simple admin login for local testing. Credentials:

- Username: `admin`
- Password: `1234`

After logging in you can view recent orders and add/edit/delete products. Product changes are persisted to localStorage so they survive page refresh.

## Persistence and localStorage keys

The app stores data in localStorage for demo purposes. Key names used by the app:

- `mechSupply_cart` — the current shopping cart contents
- `mechSupply_products` — product list persisted by the admin panel (falls back to `src/data/products.json` if empty)
- `orders` — array of submitted orders (created when placing an order)

## Data files

- `src/data/products.json` — initial product data (used as the fallback/default list)
- Admin-created/edited products are stored in localStorage (see `mechSupply_products` key) so you can modify the catalog locally without changing source files.

## Developer notes

- Cart state is managed with React context and a reducer (`src/context/CartContext.jsx` and `src/context/CartReducer.jsx`).
- Orders are saved client-side via utility functions in `src/utils/orders.js`.
- Product management utilities are in `src/utils/products.js` and read/write localStorage.

## Accessibility & behavior

The site uses semantic buttons and accessible patterns (icon buttons wrapped in `<button>`), and the admin/product forms include basic sanitization for numeric prices.

## Want to change something?

- To reset the product catalog to the default JSON, clear the `mechSupply_products` key from localStorage (DevTools → Application → Local Storage → remove key), then refresh.
- To clear all orders, remove the `orders` key from localStorage.

## Limitations

- This is a demo app without a real backend or user accounts. All data in localStorage can be edited or cleared by anyone using the browser devtools.
- IDs are generated with Date.now() — OK for local/demo use but not suitable for distributed production systems.

## Contributing / experimenting

- Add new components under `src/components/` and pages under `src/pages/`.
- Styles are in `src/styles/` (SCSS). The main entry is `src/styles/main.scss` which imports component styles.

## License

This project is free to use, modify, and distribute by anyone. The code in this repository is released under the MIT License — see the `LICENSE` file in the project root for the full legal text and permissions. In short: you are free to use the project for personal and commercial projects, adapt it, and share it with attribution as described in the LICENSE file.

## Acknowledgements

- This project used GitHub Copilot to speed up development (code suggestions, scaffolding, and small refactors).
- UI and visual design decisions, content, and the final implementation were created by me.

Happy hacking — if you want me to update this README further (shorter, more visual, or add screenshots), tell me what to include.
