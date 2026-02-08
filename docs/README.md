# AFMDev Portfolio

A modern, high-performance portfolio website built with SolidStart, featuring smooth animations, elegant design, and optimized performance.

## 📚 Documentation

- [Getting Started](./GETTING_STARTED.md) - Setup and development instructions
- [Architecture](./ARCHITECTURE.md) - Project structure and design decisions
- [Components](./COMPONENTS.md) - Available components and their usage
- [Deployment](./DEPLOYMENT.md) - Deployment to production

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Framework**: [SolidStart](https://start.solidjs.com) with [SolidJS](https://www.solidjs.com)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animations**: [GSAP](https://greensock.com/gsap) & [Lenis](https://lenis.studiofreight.com)
- **Routing**: [@solidjs/router](https://docs.solidjs.com/guides/how-to-guides/routing)
- **Language**: TypeScript

## 📁 Project Structure

```
portfolio/
├── docs/                 # Documentation files
├── src/
│   ├── components/       # Reusable UI components
│   ├── routes/           # Page routes
│   ├── stores/           # Global state management
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── app.tsx           # Root component
│   ├── app.css           # Global styles
│   ├── entry-client.tsx  # Client entry point
│   └── entry-server.tsx  # Server entry point
├── public/               # Static assets
├── app.config.ts         # SolidStart configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 🎨 Features

- ✨ Smooth scroll animations with Lenis
- 🎬 Advanced animations with GSAP
- 📱 Fully responsive design
- ♿ Accessible components
- 🎯 SEO optimized
- ⚡ Server-side rendering (SSR) capable
- 📦 TypeScript support
- 🎨 Tailwind CSS for styling

## 🔗 Available Scripts

```bash
npm run dev          # Start development server (port 3001)
npm run build        # Create production build
npm start            # Start production server (port 3001)
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 📋 Node Version

Requires Node.js >= v22

## 📝 Notes

This project was created with Solid CLI and is fully configured for modern web development with a focus on performance and user experience.
