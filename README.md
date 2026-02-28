# Ecommerce-_Frontend
A fully functional front-end shopping system without the need for a live backend. The app utilizes static JSON data for products, providing a swift browsing experience. It features an interactive shopping cart, mock-up login forms, an admin dashboard layout, and a sleek modern design layout across multiple devices.
## Features Implemented

*   **Home Page**: Features a hero section and displays a snippet of featured products.
*   **Products Listing Page**: A grid layout showcasing all available dummy products.
*   **Product Details Page**: A detailed static view of an individual product, allowing users to add to the cart.
*   **Cart Functionality**: Real-time state management (`useState`) to track cart items, adjust quantity, delete items, and calculate the total price dynamically. Cart count is indicated in the global Navigation bar.
*   **Login / Signup Page**: A clean UI mockup to simulate authentication flows.
*   **Admin Dashboard**: A separate routed area replicating a MERN-style premium admin dashboard layout using a persistent sidebar and dashboard home metrics (Products count, simulated user/orders count).
*   **Fully Responsive**: Styled heavily with custom modern CSS and Bootstrap 5 to conform seamlessly to desktop, tablet, and mobile displays.

## Technologies Used

*   **React.js (v18)** - Functional Components & Hooks exclusively (`useState`, etc)
*   **JavaScript (ES6+)**
*   **HTML5 & CSS3**
*   **Bootstrap 5 & React-Bootstrap** - For rapid layout, grid structures, and UI components
*   **React Router DOM** - Handling seamless client-side routing and layout persistence
*   **React Icons** - For premium and scalable SVG vector icons

## Folder Structure

```
my-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable application components
│   │   ├── Navbar.js       # Top navigation with dynamic cart badge
│   │   ├── ProductCard.js  # Card layout for displaying individual items
│   │   └── Sidebar.js      # Admin dashboard side navigation
│   ├── data/
│   │   └── products.js     # Dummy/static JSON product data array
│   ├── pages/
│   │   ├── AdminDashboard.js # Complex dashboard layouts and Admin routes
│   │   ├── Cart.js         # Dedicated cart calculations and UI
│   │   ├── Home.js         # Landing platform
│   │   ├── Login.js        # Auth mockup UI
│   │   ├── ProductDetails.js # Single product extended view
│   │   └── Products.js     # All products catalog
│   ├── App.css             # Main application and layout-specific styling
│   ├── App.js              # Root component managing Routes and Global Cart State
│   ├── index.css           # Global body setups, overrides, and design tokens
│   └── index.js            # React root injection point
├── package.json
└── README.md
```

## Steps to Run Project

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. In the root directory (`my-app`), run `npm install` to ensure all required dependencies (`react-router-dom`, `react-bootstrap`, `bootstrap`, `react-icons`) are present.
3. Start the local development server by running `npm start`.
4. The application will compile and open automatically in your browser at `http://localhost:3000`.

