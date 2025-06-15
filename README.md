# Matnim

Matnim is a web application for generating mathematical animations using AI and natural language prompts. It features a modern React + Vite + Tailwind CSS frontend and an Express.js backend API.

## Features
- Generate mathematical animations from text prompts
- Gallery of sample and user-generated animations
- Responsive, modern UI with React Router
- Pricing and About pages
- User authentication (UI only)

## Project Structure
```
matnim/
├── client/           # React frontend (Vite, Tailwind CSS)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ScrollToTop.jsx
│   │   ├── layouts/
│   │   │   ├── BaseLayout.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── AboutPage.jsx
│   │   │   ├── GalleryPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── PricingPage.jsx
│   │   │   └── loginpage.jsx
│   │   ├── services/
│   │   │   └── AnimationService.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── server/           # Express backend
│   ├── public/
│   │   └── VID-20240918-WA0006.mp4
│   ├── index.js
│   └── package.json
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Start the Server
```
cd server
npm install
npm run dev
```
The server runs on [http://localhost:3000](http://localhost:3000) and serves a test video at `/VID-20240918-WA0006.mp4`.

### 2. Start the Client
```
cd client
npm install
npm run dev
```
The client runs on [http://localhost:5173](http://localhost:5173) by default.

> **Note:** Set the `VITE_SERVER_URL` environment variable in the client to point to your backend (default: `http://localhost:3000`).

## Usage
- Enter a math animation prompt on the homepage to generate an animation (demo returns a static video).
- Browse the Gallery for sample animations.
- Learn more on the About and Pricing pages.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, React Router
- **Backend:** Express.js, CORS

---
Feel free to contribute or customize for your needs!
