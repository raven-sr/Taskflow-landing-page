# TaskFlow — SaaS Landing Page

A responsive single-page SaaS landing website created for the Sankar Group Front-End Development Internship Assignment.

## Tech stack
- React 18
- Vite
- JavaScript
- Bootstrap 5 (grid and form utilities)
- Custom CSS
- Lucide React icons

## Features
- Responsive navigation with smooth section scrolling
- Hero section with product dashboard preview
- Six feature cards
- How-it-works section
- Three pricing plans with monthly/yearly toggle
- FAQ accordion using native HTML details/summary
- Contact/demo form with client-side validation and success state
- Responsive layouts for desktop, tablet, and mobile

## Run locally
1. Install Node.js (LTS).
2. Extract this project ZIP.
3. Open the project folder in VS Code.
4. Open a terminal in the project folder and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Deployment
Push the project to GitHub, then import the repository into Vercel. Use the default Vite settings:
- Build command: `npm run build`
- Output directory: `dist`

## Notes
- This is a front-end-only assignment. The demo form validates input and displays a success message; it does not send data to a backend.
- Product name, customer quotes, metrics, email, and pricing are sample/demo content. Replace them if you want to present real business information.
- No API keys, passwords, or private credentials are included.
