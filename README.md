# Blog Site

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/prrranay/blog-site.git
    cd blog-site
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

## Project Structure

- `content/posts`: Directory containing Markdown files for blog posts.
- `lib/posts.js`: Utility functions to fetch posts data.
- `pages/index.js`: Homepage displaying the list of posts.
- `pages/posts/[slug].js`: Dynamic routes for individual blog posts.
- `components/Layout.js`: Layout component used across all pages.
- `components/Layout.module.css`: CSS module for styling the layout.

## Live Demo

Check out the live demo at [Your Vercel Link](https://your-vercel-link.vercel.app).
