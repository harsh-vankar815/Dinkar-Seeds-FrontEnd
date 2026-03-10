# 🌱 Dinkar Seeds — Frontend

A modern, responsive web application for **Dinkar Seeds**, a trusted agricultural seed supplier with 30+ years of expertise. Built with **React 19**, **Vite**, and **TailwindCSS**, this frontend delivers a premium user experience for browsing seed products, managing profiles, and interacting with an AI-powered chatbot.

> 🔗 **Live Demo:** [dinkar-seeds.onrender.com](https://dinkar-seeds.onrender.com)
>
> 🔗 **Backend API:** [dinkar-seeds-back-end.vercel.app](https://dinkar-seeds-back-end.vercel.app)

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Available Scripts](#-available-scripts)
- [Pages & Routes](#-pages--routes)
- [Authentication](#-authentication)
- [API Integration](#-api-integration)
- [Admin Panel](#-admin-panel)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

| Category | Features |
|---|---|
| 🏠 **Public Pages** | Home, About, Contact, Products, Gallery |
| 🔐 **Authentication** | User Registration, Login, Protected Routes, Auto Token Refresh |
| 👤 **User Profile** | View & Edit Profile with Image Upload |
| 🛒 **Products** | Browse All Products, View Single Product Details, Category Filter |
| 🖼️ **Gallery** | Image Gallery Showcase |
| 🤖 **AI Chatbot** | AI-powered assistant for seed-related queries with WhatsApp fallback |
| 🛡️ **Admin Panel** | Dashboard, Product CRUD (Add/Edit/Delete), Gallery Management |
| 📱 **Responsive** | Mobile-first design, works across all screen sizes |
| 🎨 **Animations** | Smooth transitions, fade-in effects, gradient animations |
| 🔔 **Notifications** | Toast notifications using `react-hot-toast` |
| 🔄 **Auto Scroll** | Scroll-to-top on route change |
| 🔍 **SEO** | Meta tags, descriptions, and Google site verification |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI Library |
| [Vite 7](https://vite.dev/) | Build Tool & Dev Server |
| [TailwindCSS 3](https://tailwindcss.com/) | Utility-first CSS Framework |
| [React Router DOM 7](https://reactrouter.com/) | Client-side Routing |
| [Axios](https://axios-http.com/) | HTTP Client with Interceptors |
| [Lucide React](https://lucide.dev/) | Icon Library |
| [React Icons](https://react-icons.github.io/react-icons/) | Additional Icons |
| [React Hot Toast](https://react-hot-toast.com/) | Toast Notifications |
| [PostCSS](https://postcss.org/) | CSS Processing |
| [ESLint](https://eslint.org/) | Code Linting |

---

## 📁 Project Structure

```
frontend/
├── public/
│   ├── favicon.ico            # Site favicon
│   ├── gallery/               # Gallery images
│   └── img/                   # Static images
├── src/
│   ├── admin/                 # Admin panel components
│   │   ├── AddProduct.jsx     # Add new product form
│   │   ├── AdminDashboard.jsx # Admin dashboard overview
│   │   ├── AdminGallery.jsx   # Gallery management
│   │   ├── AdminLayout.jsx    # Admin layout wrapper
│   │   ├── AdminProducts.jsx  # Product list management
│   │   ├── EditProduct.jsx    # Edit product form
│   │   └── Sidebar.jsx        # Admin sidebar navigation
│   ├── api/
│   │   └── axios.js           # Axios instance with interceptors
│   ├── components/
│   │   ├── AllProducts.jsx    # Products listing page
│   │   ├── AuthSuccess.jsx    # OAuth success handler
│   │   ├── ChatBot.jsx        # AI chatbot component
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Header.jsx         # Navigation header
│   │   ├── NotFound.jsx       # 404 page
│   │   └── SingleProduct.jsx  # Product detail page
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.jsx      # Login page
│   │   │   └── Register.jsx   # Registration page
│   │   ├── About.jsx          # About page
│   │   ├── Category.jsx       # Category page
│   │   ├── Contact.jsx        # Contact page
│   │   ├── Gallery.jsx        # Gallery page
│   │   ├── Home.jsx           # Home page
│   │   ├── Products.jsx       # Products page
│   │   └── Profile.jsx        # User profile page
│   ├── routes/
│   │   └── ProtectedRoute.jsx # Auth & role-based route guard
│   ├── services/
│   │   ├── galleryApi.js      # Gallery API calls
│   │   ├── productApi.js      # Product API calls
│   │   └── userApi.js         # User/Auth API calls
│   ├── utils/
│   │   └── auth.js            # Auth utility helpers
│   ├── App.jsx                # Main App with routing
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── .env                       # Environment variables
├── .gitignore                 # Git ignore rules
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Dependencies & scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # TailwindCSS configuration
└── vite.config.js             # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** — `v18` or higher → [Download](https://nodejs.org/)
- **npm** — `v9` or higher (comes with Node.js)
- **Git** — [Download](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/harsh-vankar815/Dinkar-Seeds.git
   cd Dinkar-Seeds/frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the `frontend/` root directory:

```env
# Backend API URL (local development)
VITE_SERVER_URL=http://localhost:5000

# Backend API URL (production — uncomment when deploying)
# VITE_SERVER_URL=https://dinkar-seeds-back-end.vercel.app/
```

> ⚠️ **Note:** All environment variables in Vite must be prefixed with `VITE_` to be accessible in the client-side code.

### Running the App

```bash
# Start the development server
npm run dev
```

The app will be available at **`http://localhost:5173`** by default.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🗺️ Pages & Routes

### Public Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero section & featured products |
| `/about` | About | Company history and information |
| `/contact` | Contact | Contact form and details |
| `/products` | All Products | Browse all seed products |
| `/product/:id` | Single Product | Detailed product view |
| `/gallery` | Gallery | Photo gallery showcase |
| `/login` | Login | User login page |
| `/signup` | Register | User registration page |
| `/auth/success` | Auth Success | OAuth callback handler |

### Protected Routes (Login Required)

| Route | Page | Description |
|---|---|---|
| `/profile` | Profile | User profile management |

### Admin Routes (Admin Role Required)

| Route | Page | Description |
|---|---|---|
| `/admin` | Dashboard | Admin overview dashboard |
| `/admin/products` | Products | Manage all products |
| `/admin/add-product` | Add Product | Create a new product |
| `/admin/edit-product/:id` | Edit Product | Modify existing product |
| `/admin/gallery` | Gallery | Manage gallery images |

---

## 🔐 Authentication

The app implements a **JWT-based authentication** system with automatic token refresh:

- **Access Token** — Stored in `localStorage`, sent via `Authorization: Bearer` header
- **Refresh Token** — Stored as an HTTP-only cookie, used to silently refresh expired access tokens
- **Auto Refresh** — Axios response interceptor automatically handles `401` errors by requesting a new access token
- **Failed Queue** — Concurrent requests during token refresh are queued and retried once the new token is available
- **Protected Routes** — `ProtectedRoute` component checks for valid auth tokens and user roles before rendering

```
User Login → Access Token + Refresh Token
     ↓
API Request → Attach Access Token (Interceptor)
     ↓
401 Error? → Auto Refresh Token → Retry Request
     ↓
Refresh Failed? → Redirect to /login
```

---

## 🔌 API Integration

All API calls are centralized in the `src/services/` directory:

| Service File | Endpoints |
|---|---|
| `userApi.js` | `POST /auth/register`, `POST /auth/login`, `POST /auth/logout`, `GET /profile/me`, `PUT /profile/update` |
| `productApi.js` | `GET /products`, `GET /products/:id`, `POST /products`, `PUT /products/:id`, `DELETE /products/:id` |
| `galleryApi.js` | `GET /gallery`, `POST /gallery/upload`, `DELETE /gallery/:id` |

The Axios instance (`src/api/axios.js`) is configured with:
- **Base URL** from environment variable
- **Credentials** enabled for cookie-based refresh tokens
- **Request interceptor** for attaching JWT access tokens
- **Response interceptor** for automatic token refresh on `401` errors

---

## 🛡️ Admin Panel

The admin panel provides a complete content management interface:

- **Dashboard** — Overview of site statistics
- **Product Management** — Full CRUD operations with image upload (multipart/form-data)
- **Gallery Management** — Upload and delete gallery images
- **Sidebar Navigation** — Dedicated admin navigation
- **Role-based Access** — Only users with `role: "admin"` can access admin routes

> Admin routes are wrapped in `<ProtectedRoute adminOnly>` which verifies both authentication and admin role.

---

## 🤖 AI Chatbot

The built-in chatbot provides:
- **AI-powered responses** for seed-related queries via the backend `/api/chat` endpoint
- **WhatsApp fallback** — Direct link to WhatsApp for human support
- **Floating UI** — Accessible from any page (except admin panel)
- **Responsive design** — Adapts to mobile and desktop screens

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This generates a `dist/` folder with optimized static assets.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com/)
3. Set the **Framework Preset** to `Vite`
4. Add environment variables:
   - `VITE_SERVER_URL` = your backend URL
5. Deploy! 🎉

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to [Netlify](https://netlify.com/)
3. Add a `_redirects` file in `public/` for SPA routing:
   ```
   /*    /index.html   200
   ```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m "feat: add my feature"`
4. **Push** to the branch: `git push origin feature/my-feature`
5. **Open** a Pull Request

---

## 📄 License

This project is developed as part of an academic project for **Dinkar Seeds**.

---

<p align="center">
  Made with 💚 by <strong>Harsh Vankar</strong>
</p>