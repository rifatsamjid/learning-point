# SkillSwap — Local Skill Exchange Platform

A minimal, modern single-page React app to list, view, and book local skill sessions with Firebase authentication and protected pages.

Live demo: [https://learning-point-1e3e0.web.app/](https://learning-point-1e3e0.web.app/)

## Key features

- Firebase Authentication (Email/password + Google Sign-In).
- Protected Skill Details page that requires login; redirects back to requested route after sign-in.
- Responsive layout (mobile/tablet/desktop).
- Hero slider using Swiper; subtle animations via AOS + Framer Motion for micro-interactions.
- Toast notifications using react-hot-toast.
- JSON-driven skill listings (6+ sample items in `public/data.json`).
- Profile page with update profile (name and photoURL) using `updateProfile()`.
- Forgot password flow (sends password reset email; opens Gmail via link after submit — instructor requirement).
- SPA routing with React Router v6 and no route-reload errors.

## Packages used

- react, react-dom
- react-router-dom
- firebase
- tailwindcss + daisyUI (optional but recommended)
- swiper
- aos
- react-hot-toast

## Run locally

1. `git clone <repo>`
2. `npm install`
3. Copy `.env.example` to `.env` and fill your Firebase config
4. `npm run dev`
