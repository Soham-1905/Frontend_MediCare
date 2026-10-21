# MediCare Pharmacy Landing Page

A simple pharmacy landing page and customer registration form built with React, Vite, and Tailwind CSS.

## Requirements

- Node.js (LTS recommended)
- npm

## Project structure

```
src/
  App.jsx                  page layout
  components/
    Header  Hero  Services  HowItWorks  RegisterForm  Footer  Icons (.jsx)
design/
  landing-page.svg         Figma frame (1440px desktop)
  registration-form.svg    Figma frame (default + filled/success states)
```

To use the designs, drag the `.svg` files onto a Figma canvas. Install the Inter font for correct text rendering.

## Run locally

1. Extract the ZIP file.
2. Open a terminal in the `medicare-pharmacy` folder.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite in your browser.

## Production build

```bash
npm run build
npm run preview
```

## Registration form note

The form uses React state, basic browser validation, and a confirmation message. It does **not** send or save registration details to a server or database. Do not use this as a real account system until a backend is added, including secure password handling and server-side validation.
