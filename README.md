# Ravinder Portfolio

Personal portfolio website built with React, Vite, TailwindCSS, and React Router.

The site includes a home page, project showcase, embedded resume, and social links, all wrapped in a retro-inspired visual style.

Live site:

- https://ravinder-sage.vercel.app

## Tech Stack

- React
- Vite
- TailwindCSS
- React Router
- Animate.css

## Pages

- `Home` : personal intro, current focus, hobbies, daily drivers
- `Code` : selected projects and project overview
- `Resume` : embedded resume view
- `Social` : social links and contact profiles

## Local Development

```bash
npm install
npm run dev
```

## Build For Production

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  components/   reusable UI components
  pages/        route-level pages
public/
  content/      portfolio content data
  images/       images and project screenshots
  logo/         icons and visual assets
```

## Content Updates

Most editable portfolio text lives in:

- `public/content/content.js`

## Notes

- `npm run lint` checks code quality
- `npm run build` creates the production build
