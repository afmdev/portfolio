# Documentation Index

Complete documentation for the AFMDev Portfolio project.

## 📖 Quick Navigation

### Getting Started
- **[README](./README.md)** - Project overview and quick start guide
- **[Getting Started](./GETTING_STARTED.md)** - Installation, setup, and development workflow

### Architecture & Design
- **[Architecture](./ARCHITECTURE.md)** - Project structure, design decisions, and patterns
- **[Styling Guide](./STYLING.md)** - Complete style system, design tokens, and CSS variables
- **[Components Documentation](./COMPONENTS.md)** - Component guidelines and patterns

### Deployment
- **[Deployment Guide](./DEPLOYMENT.md)** - Deployment options, CI/CD, and production setup

---

## 📁 Project Structure

```
portfolio/
├── docs/                      # This documentation
│   ├── INDEX.md              # You are here
│   ├── README.md             # Overview
│   ├── GETTING_STARTED.md    # Setup & development
│   ├── ARCHITECTURE.md       # Project structure
│   ├── STYLING.md            # Styling system
│   ├── COMPONENTS.md         # Component patterns
│   └── DEPLOYMENT.md         # Deployment guide
│
├── src/
│   ├── styles/               # Design system
│   │   ├── variables.css     # Design tokens
│   │   ├── colors.css        # Color palette
│   │   ├── typography.css    # Typography system
│   │   ├── animations.css    # Animation library
│   │   ├── global.css        # Global styles
│   │   └── README.css        # Styles directory info
│   │
│   ├── components/           # Reusable UI components
│   ├── routes/              # Page routes
│   ├── stores/              # State management
│   ├── types/               # TypeScript definitions
│   ├── utils/               # Helper functions
│   ├── app.tsx              # Root component
│   └── app.css              # Main stylesheet
│
├── public/                  # Static assets
├── package.json             # Dependencies
└── README.md               # Quick reference (root)
```

---

## 🚀 Quick Start Commands

```bash
# Development
npm install
npm run dev              # Server at localhost:3001

# Production
npm run build
npm start                # Start production server

# Code Quality
npm run format           # Format code with Prettier
npm run format:check     # Check formatting
```

---

## 📚 Key Documentation Topics

### For New Developers
1. Start with [README.md](./README.md) for overview
2. Follow [GETTING_STARTED.md](./GETTING_STARTED.md) for setup
3. Read [ARCHITECTURE.md](./ARCHITECTURE.md) to understand structure
4. Check [STYLING.md](./STYLING.md) to understand the style system

### For Component Development
1. Review [COMPONENTS.md](./COMPONENTS.md) for patterns
2. Check [ARCHITECTURE.md](./ARCHITECTURE.md#styling-strategy) for styling approach
3. Use [STYLING.md](./STYLING.md) as reference for design tokens

### For Styling & Design
1. Start with [STYLING.md](./STYLING.md)
2. Reference `src/styles/README.css` for implementation details
3. Check `src/styles/[filename].css` files for specific token definitions

### For Deployment
1. Read [DEPLOYMENT.md](./DEPLOYMENT.md) for all options
2. Choose platform (Vercel recommended)
3. Follow platform-specific instructions

---

## 🛠️ Tech Stack

- **Framework**: SolidStart / SolidJS
- **Styling**: Tailwind CSS v4 + CSS Variables
- **Animations**: GSAP, Lenis, View Transitions API
- **Routing**: @solidjs/router
- **Language**: TypeScript
- **Build Tool**: Vite
- **Code Quality**: Prettier, TypeScript strict mode

---

## 📝 Key Features

✨ **Modern Architecture**
- File-based routing with SolidStart
- Modular design system
- Type-safe components with TypeScript

🎨 **Styling System**
- Comprehensive design tokens
- Light & dark mode support
- Custom colors beyond Tailwind
- Pre-built animations

⚡ **Performance**
- GPU-accelerated animations
- Code splitting for routes
- Tree-shaking in production
- Hardware-accelerated scrolling (Lenis)

♿ **Accessibility**
- Semantic HTML
- ARIA attributes
- Keyboard navigation support
- Reduced motion support

---

## 🤝 Contributing

When working on this project:

1. **Follow patterns** defined in [ARCHITECTURE.md](./ARCHITECTURE.md)
2. **Use design tokens** from [STYLING.md](./STYLING.md)
3. **Component guidelines** in [COMPONENTS.md](./COMPONENTS.md)
4. **Run `npm run format`** before committing

---

## 📖 Additional Resources

### SolidJS & SolidStart
- [SolidJS Documentation](https://docs.solidjs.com)
- [SolidStart Guide](https://start.solidjs.com)

### Styling & Design
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [CSS Variables (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [GSAP Documentation](https://greensock.com/gsap)
- [Lenis Smooth Scroll](https://lenis.studiofreight.com)

### Tooling
- [Vite Guide](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Prettier Code Formatter](https://prettier.io)

---

## ❓ FAQ

**Q: How do I add a new color?**
A: Add it to `src/styles/colors.css` in both light and dark mode sections, then use `var(--color-name)`.

**Q: How do I create a new animation?**
A: Add keyframes to `src/styles/animations.css` and optionally add a utility class for it.

**Q: Can I use custom fonts?**
A: Yes, add font imports to `src/styles/typography.css` in the `--font-*` definitions.

**Q: How is dark mode handled?**
A: Automatically via CSS variables in `html.dark` selector. No need for Tailwind's `dark:` prefix.

**Q: Where should I put component-specific styles?**
A: Keep them in the component file or a sibling CSS file. Use Tailwind utilities when possible.

---

## 📞 Support

For questions or issues:
1. Check relevant documentation section above
2. Review example code in components
3. Check SolidJS/Tailwind documentation
4. Contact team lead

---

**Last Updated**: February 8, 2026  
**Version**: 1.0.0
