# 🛍️ Shoplio

A modern e-commerce landing page built with **React** and **Vite**, featuring a fully responsive layout and dark mode support.

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 📖 About

Shoplio is a storefront landing page showcasing the core sections of an e-commerce site: a hero slider, product grids, a promotional banner, a newsletter subscription form, customer testimonials, and a footer. It's a solid starting point or base template for shop-style projects.

## ✨ Features

- ⚡️ Built with Vite for a fast dev/build experience
- 🎨 Styled with Tailwind CSS
- 🌗 Light / Dark mode toggle, persisted in `localStorage`
- 🖼️ Image carousel powered by [react-slick](https://react-slick.neostack.com/)
- ✨ Scroll animations with [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🧩 Component-driven, easily extensible architecture
- 🪟 Order popup/modal

## 🖥️ Sections Overview

| Component | Description |
|---|---|
| `Navbar` | Site header with search, cart, and theme toggle |
| `Hero` | Main promotional image slider |
| `Products` | Product grid |
| `TopProducts` | Featured/best-selling products |
| `Banner` | Highlights of store benefits |
| `Subscribe` | Newsletter signup form |
| `Testimonials` | Customer reviews slider |
| `Footer` | Site footer |
| `Popup` | Order submission form |

## 🛠️ Tech Stack

| Category | Tool |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Icons | react-icons |
| Carousel | react-slick / slick-carousel |
| Animations | AOS |
| Linting | ESLint |

## 📁 Project Structure

```
shoplio/
├── public/
├── src/
│   ├── assets/              # Images and static files
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Products/
│   │   ├── TopProducts/
│   │   ├── Banner/
│   │   ├── Subscribe/
│   │   ├── Testimonials/
│   │   ├── Footer/
│   │   └── Popup/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/shoplio.git
cd shoplio

# Install dependencies
npm install
```

### Run in development mode

```bash
npm run dev
```

Open the URL printed in your terminal (usually `http://localhost:5173`) in your browser.

### Build for production

```bash
npm run build
```

The output will be generated in the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

### Lint the code

```bash
npm run lint
```

## 🧩 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint to check code quality |

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<p align="center">Built with ❤️ and React</p>
