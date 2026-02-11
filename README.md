# Real Estate Website

A modern, fully responsive real estate platform built with React.js and Tailwind CSS. This website showcases luxury villas, apartments, and commercial properties, providing users with a seamless and engaging experience.
Live Demo: https://bombay-villa-advisory.pages.dev/
---

## 📋 Table of Contents
- [Features](#features)
- [Pages & Structure](#pages--structure)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How to Run Locally](#how-to-run-locally)
- [Deployment Guide](#deployment-guide)
- [Custom Domain Setup](#custom-domain-setup)
- [Contact & Support](#contact--support)

---

## ✨ Features
- Beautiful, modern UI with smooth animations (Framer Motion, AOS)
- Fully responsive: works on desktop, tablet, and mobile
- Dynamic property/project showcase with images and details
- Gallery with images and videos
- Interactive contact form (WhatsApp integration)
- Testimonials and client feedback
- Custom 404 page
- SEO-friendly structure
- Easy to deploy on Netlify, Vercel, or any static host

---

## 📄 Pages & Structure
- **Home**: Hero section, featured projects, testimonials, about, and callback request
- **About**: Brand story, values, team, and testimonials
- **Projects**: List of all projects/locations (villas, apartments, commercial, etc.)
- **Single Project**: Detailed view for each project (images, specs, location, etc.)
- **Gallery**: Image and video gallery
- **Contact**: Contact form (WhatsApp), contact info, and map
- **Investment Opportunities**: Special investment projects
- **Testimonials**: Client reviews
- **404 Not Found**: Custom error page

---

## 🛠 Tech Stack
- **React.js** (SPA, component-based)
- **Vite** (fast dev/build tool)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (animations)
- **AOS** (scroll animations)
- **React Router DOM** (routing)
- **React Icons** (iconography)

---

## 📁 Project Structure
```
root/
├── public/
│   └── netlify.toml         # Netlify redirects for SPA
├── src/
│   ├── Assets/              # Images, videos, icons
│   ├── components/          # Reusable UI components
│   ├── data/                # Data files (JS objects/arrays)
│   ├── pages/               # Main pages (Home, About, etc.)
│   ├── theme/               # Theme/context utilities
│   ├── index.css            # Tailwind and global styles
│   └── main.jsx             # App entry point
├── index.html               # Main HTML file
├── package.json             # Project metadata & scripts
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
├── vite.config.js           # Vite config
└── README.md                # This file
```

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Deadshot690/Bombay-Villa.git
   cd Real-Estate-Website-main
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173` by default.

---

## 📦 Deployment Guide

### Build for Production
```sh
npm run build
```
This will generate a `dist/` folder with the production build.

### Deploy to Netlify
1. Push your code to GitHub or GitLab.
2. Go to [Netlify](https://netlify.com) and create a new site from your repo.
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add a `netlify.toml` or `_redirects` file for SPA routing:
   ```toml
   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```
6. Deploy and your site will be live!

### Deploy to Vercel
1. Push your code to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com) and import your repo.
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

---

## 🌍 Custom Domain Setup

1. Buy a domain from any provider (e.g., Namecheap, GoDaddy).
2. In Netlify/Vercel dashboard, go to Domain settings and add your custom domain.
3. Update your domain’s DNS settings:
   - For Netlify: Set CNAME to your Netlify subdomain.
   - For Vercel: Set CNAME to your Vercel subdomain.
4. Wait for DNS propagation (can take a few minutes to hours).
5. Your site will be live on your custom domain!

---

## 📝 Contact & Support
- For issues, open an issue on GitHub.
- For business inquiries, use the contact form on the website or WhatsApp integration.

---

## 📜 License
This project is licensed under the MIT License.
