# SkillSwap — Local Skill Exchange Platform

**Live Demo:** [https://learning-point-1e3e0.web.app/](https://learning-point-1e3e0.web.app/)  
**GitHub Repository:** [https://github.com/rifatsamjid/learning-point](https://github.com/rifatsamjid/learning-point)

SkillSwap is a minimal, modern single-page React app to list, view, and book local skill sessions.  
It comes with Firebase authentication, protected routes, and a responsive design for all devices.

---

## Key Features

- Firebase Authentication (Email/password + Google Sign-In)
- Protected Skill Details page (requires login; redirects back after sign-in)
- Responsive layout for mobile, tablet, and desktop
- Hero slider using Swiper
- Subtle animations via AOS + Framer Motion for micro-interactions
- Toast notifications using react-hot-toast
- JSON-driven skill listings (`public/data.json`) with 6+ sample items
- Profile page with update profile (name and photoURL) via `updateProfile()`
- Forgot password flow (sends password reset email)
- SPA routing with React Router v6 and no route-reload errors

---

## Technologies Used

| Category               | Technology                            |
| ---------------------- | ------------------------------------- |
| **Frontend Framework** | React (with Vite)                     |
| **Routing**            | React Router DOM v6                   |
| **Styling**            | Tailwind CSS + daisyUI                |
| **Animations**         | AOS, Animate.css, @react-spring/web   |
| **UI Components**      | React Icons, Swiper                   |
| **State Management**   | React Hooks (`useState`, `useEffect`) |
| **Authentication**     | Firebase Auth                         |
| **Notifications**      | react-hot-toast                       |

---

## Dependencies

````json
{
  "@react-spring/web": "^10.0.3",
  "@tailwindcss/vite": "^4.1.16",
  "animate.css": "^4.1.1",
  "aos": "^2.3.4",
  "firebase": "^12.4.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.4",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.16"
}

## Installation

Follow these steps to set up and run **MovieMaster Pro** locally on your machine.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn or pnpm
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/rifatsamjid/learning-point.git
   cd learning-point

   ### Install dependencies
    npm install
    # or
    yarn install
    # or
    pnpm install

### Run the development server

npm run dev
# or
yarn dev
# or
pnpm dev
````
