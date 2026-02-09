# Getting Started

## Prerequisites

- **Node.js**: v22 or higher
- **npm**, **yarn**, or **pnpm** for package management
- A modern code editor (VS Code recommended)

## Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

   Or with yarn/pnpm:

   ```bash
   yarn install
   # or
   pnpm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3001`

   To automatically open in your browser:

   ```bash
   npm run dev -- --open
   ```

## Development Workflow

### Code Formatting

We use Prettier for consistent code formatting:

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

Prettier is configured to work with:

- JavaScript/JSX/TypeScript/TSX files
- JSON
- CSS

### File Structure

When adding new features:

- **Components**: Add reusable components in `src/components/`
- **Routes**: Add new pages in `src/routes/`
- **Stores**: Add global state in `src/stores/`
- **Types**: Add type definitions in `src/types/`
- **Utils**: Add utility functions in `src/utils/`

### Hot Module Replacement (HMR)

The development server supports HMR, so your changes will reflect immediately without full page reloads.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.vinxi` directory.

## Starting the Production Server

```bash
npm start
```

The server will run on `http://localhost:3001`

## Troubleshooting

### Port Already in Use

If port 3001 is already in use, you can use a different port:

```bash
npm run dev -- --port 3002
```

### Dependency Issues

If you encounter dependency issues:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear Cache

To clear Vite cache:

```bash
rm -rf .vinxi
npm run dev
```

## Next Steps

- Read the [Architecture](./ARCHITECTURE.md) guide to understand the project structure
- Check the [Components](./COMPONENTS.md) documentation for available components
- Review the [Deployment](./DEPLOYMENT.md) guide when ready to go live
