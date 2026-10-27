# Good Taste - Recipe Web Application

A modern, responsive web application built with HTML, CSS, and JavaScript that allows users to search for delicious recipes, explore categories, view detailed instructions, and save their favorite dishes.

## Features

- **Dynamic Search**: Search for recipes globally using **TheMealDB API**.
- **Category Filtering**: Explore recipes by categories (Chicken, Beef, Pasta, Dessert, Seafood, Vegetarian, Side, Starter) with strict built-in filters to ensure relevant results (e.g., excluding sandwiches or puddings from pasta).
- **Detailed Modal View**: Click on any recipe to view its high-resolution image, complete ingredient list, and step-by-step instructions fetched live from the server.
- **Favorites / Saved Recipes**: Save your favorite recipes using browser `localStorage` so they persist across sessions.
- **Responsive Design**: Fully adaptable layout optimized for desktops, tablets, and mobile devices using CSS Grid and Flexbox.

## Technologies Used

- **HTML5**: Semantic structure and layout.
- **CSS3**: Custom variables, Flexbox, CSS Grid, and responsive media queries.
- **JavaScript (ES6+)**: Asynchronous operations (`async/await`), DOM manipulation, event handling, and API integration via `fetch`.
- **TheMealDB API**: External REST API used for fetching recipes and categories.
- **LocalStorage API**: Client-side data persistence for saved recipes.

## Project Structure

- `index.html` - Main HTML markup and structure.
- `style.css` - Stylesheet for layout, theme colors, and responsive design.
- `script.js` - Application logic, API integration, strict category filtering, modal control, and local storage management.
