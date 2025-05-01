# React Vite FakeStore Product App

## Overview
A responsive product listing and detail app built with React (Vite), Tailwind CSS, and JavaScript (JSX). Products are fetched from the [FakeStore API](https://fakestoreapi.com/products).

## Tech Stack
- **Framework:** React (Vite)
- **Language:** JavaScript (JSX)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **API:** FakeStore API

## Features
- Product listing page with image, title, price, and category
- Product detail page with all details
- Responsive design (mobile/tablet/desktop)
- Loading and error states
- Navigation between pages

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the app
```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Project Structure
```
src/
  components/    # Reusable UI components
  pages/         # Page components (Listing, Detail)
  App.jsx        # Main app with routing
  main.jsx       # Entry point
```

## Data Fetching Strategy
- **Product Listing:** Data is fetched on component mount using `useEffect` and `fetch`.
- **Product Detail:** Data is fetched on component mount for the selected product ID.
- **Justification:** Since this is a client-side app with Vite, fetching on mount is appropriate and keeps the UI responsive.

## Styling Method
- Tailwind CSS is used for all styling for rapid, consistent, and responsive design.

## Bonus Features (Optional)
- Filtering, sorting, search, pagination, and tests can be added if time permits.

## License
MIT
