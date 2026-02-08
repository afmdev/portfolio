# Deployment Guide

This guide covers deployment options for the AFMDev Portfolio.

## Pre-Deployment Checklist

- [ ] All code is committed and pushed
- [ ] Tests pass (if applicable)
- [ ] Build completes without errors: `npm run build`
- [ ] Environment variables are configured
- [ ] Production dependencies are up to date
- [ ] SEO meta tags are properly configured
- [ ] 404 page is in place

## Build for Production

```bash
npm run build
```

This creates an optimized production build. The output is in the `.vinxi` directory.

## Local Production Testing

Before deploying, test the production build locally:

```bash
npm run build
npm start
```

Visit `http://localhost:3001` and verify everything works correctly.

## Deployment Platforms

### Node.js Hosting (Heroku, Railway, Render, etc.)

#### Heroku

1. **Install Heroku CLI** and login
2. **Create Procfile**:
   ```
   web: npm start
   ```

3. **Deploy**:
   ```bash
   heroku create your-app-name
   heroku git:remote -a your-app-name
   git push heroku main
   ```

#### Railway/Render

1. Connect your GitHub repository
2. Set Node version to 22+
3. Build command: `npm run build`
4. Start command: `npm start`
5. Port: 3001

### Vercel

Vercel has excellent support for Node.js applications and SolidStart.

1. **Connect Repository**:
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository

2. **Configure**:
   - Build command: `npm run build`
   - Output directory: Leave blank (auto-detected)
   - Node version: 22

3. **Deploy**: Vercel automatically deploys on push to main

**Advantages**:
- Zero-config deployments
- Automatic HTTPS
- Global CDN
- Preview deployments
- Edge config support

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
```

**Build and run**:
```bash
docker build -t portfolio .
docker run -p 3001:3001 portfolio
```

### Docker Compose

For more complex setups:

```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
```

Run with: `docker-compose up`

### Static Site Generation (SSG)

If you want fully static hosting (GitHub Pages, Netlify, etc.), you can modify the build to generate static HTML:

1. **Update `app.config.ts`**:
```typescript
export default defineConfig({
  ssr: true,  // Enable SSR for static generation
  // ...
});
```

2. **Build**: `npm run build`
3. **Deploy** the output directory to your static host

## Environment Variables

Create a `.env.production` file for production only:

```env
VITE_API_URL=https://api.example.com
VITE_PUBLIC_URL=https://portfolio.example.com
```

In your code:
```typescript
import.meta.env.VITE_API_URL
```

## Performance Optimization

### Before Deployment

1. **Minification**: Automatically handled by Vite
2. **Code Splitting**: Automatic for routes
3. **Image Optimization**: 
   - Use WebP format where possible
   - Optimize dimensions
   - Use lazy loading

4. **CSS Optimization**: Tailwind automatically purges unused styles

### Monitoring

Use services to monitor production:
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Vercel Analytics**: Built-in with Vercel

## SSL/HTTPS

All modern hosting platforms provide free SSL:
- Vercel: Automatic
- Heroku: Automatic
- Railway: Automatic
- Docker: Use Nginx/Caddy as reverse proxy

## Custom Domain

1. Register domain (GoDaddy, Namecheap, etc.)
2. Point DNS to your hosting provider
3. Configure SSL in your hosting dashboard

**For Vercel**:
- Go to Project Settings → Domains
- Add your custom domain
- Configure DNS records

## Continuous Deployment (CI/CD)

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 22
      
      - run: npm ci
      - run: npm run format:check
      - run: npm run build
      
      - name: Deploy to Vercel
        run: npm i -g vercel && vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

## Rollback Strategy

Keep previous versions available:

```bash
# With Git tagging
git tag v1.0.0
git push origin v1.0.0

# Deploy previous version if needed
git checkout v1.0.0
npm run build
npm start
```

## Monitoring and Maintenance

### Regular Tasks

- Check error logs weekly
- Monitor performance metrics
- Update dependencies monthly
- Test critical user paths
- Backup database/content (if applicable)

### Performance Metrics

Track:
- Page load time
- Core Web Vitals
- Error rate
- User sessions

Use:
- Google Analytics
- Vercel Analytics
- Web Vitals library

## Troubleshooting Deployments

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .vinxi
npm install
npm run build
```

### Port Already in Use
The app expects port 3001. If unavailable, modify:
```typescript
// app.config.ts
export default defineConfig({
  // Force different port
});
```

### Environment Variables Not Loading
- Ensure `.env.production` is in root
- Check variable names match `VITE_*` prefix for frontend
- Restart server after adding variables

## Security Considerations

1. **Never commit secrets**: Use environment variables
2. **Keep dependencies updated**: `npm audit`, `npm update`
3. **Enable HTTPS**: All modern hosts provide this
4. **Set security headers**: Use `vercel.json` or server config
5. **Pin Node version**: Specify in `package.json` engines field

## Cost Considerations

- **Vercel**: Free tier available, $20/month for Pro
- **Railway**: Pay-as-you-go, ~$5/month typical
- **Render**: Free tier with limitations
- **Docker**: Varies by hosting (DigitalOcean, AWS, etc.)

## Support and Resources

- [SolidStart Deployment](https://start.solidjs.com/core-concepts/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Node.js Best Practices](https://nodejs.org/en/docs/)
- Hosting provider documentation
