# 🚀 Deployment Guide - Alphery Website

This guide covers multiple deployment options for your React + Vite website.

---

## 📦 Pre-Deployment Checklist

Before deploying, ensure you've completed:

- [ ] Updated all content with your actual company information
- [ ] Replaced contact details (email, phone, address)
- [ ] Updated SEO meta tags in `index.html`
- [ ] Added social media links
- [ ] Updated `sitemap.xml` with your actual domain
- [ ] Updated `robots.txt` with your actual domain
- [ ] Tested the website locally (`npm run dev`)
- [ ] Built the production version (`npm run build`)
- [ ] Previewed production build (`npm run preview`)

---

## 🌐 Option 1: Deploy to Vercel (Recommended - Fastest)

**Why Vercel?**
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Instant deployments
- ✅ Perfect for React/Vite apps

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Code to Git**
   ```bash
   cd "c:\Users\Sharanraj\Documents\QUBO\Alphery website\alphery-website"
   git init
   git add .
   git commit -m "Initial commit - Alphery website"
   
   # Create a new repository on GitHub, then:
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Deploy via Vercel Dashboard**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"
   - ✅ Done! Your site is live in ~60 seconds

4. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings > Domains
   - Add your domain (e.g., alphery.com)
   - Follow DNS configuration instructions

### Or Deploy via CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd "c:\Users\Sharanraj\Documents\QUBO\Alphery website\alphery-website"
vercel

# Production deployment
vercel --prod
```

---

## 🔷 Option 2: Deploy to Netlify

**Why Netlify?**
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Form handling (useful for contact form)
- ✅ Great for static sites

### Steps:

1. **Via Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Sign up and click "Add new site"
   - Import from Git or drag & drop the `dist` folder
   
   **Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher

2. **Via Netlify CLI**
   ```bash
   # Install Netlify CLI
   npm i -g netlify-cli
   
   # Build the project
   npm run build
   
   # Deploy
   cd "c:\Users\Sharanraj\Documents\QUBO\Alphery website\alphery-website"
   netlify deploy
   
   # Production deployment
   netlify deploy --prod
   ```

3. **Custom Domain**
   - Go to Site settings > Domain management
   - Add custom domain
   - Configure DNS

---

## 🔶 Option 3: Deploy to GitHub Pages

**Why GitHub Pages?**
- ✅ Completely free
- ✅ Easy if you're already using GitHub
- ✅ Good for personal/small business sites

### Steps:

1. **Install gh-pages package**
   ```bash
   cd "c:\Users\Sharanraj\Documents\QUBO\Alphery website\alphery-website"
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`**
   Add these lines:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/alphery-website",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.js`**
   Add base URL:
   ```javascript
   export default defineConfig({
     base: '/alphery-website/', // Repository name
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from branch `gh-pages`
   - Save

---

## ☁️ Option 4: Deploy to Firebase Hosting

**Why Firebase?**
- ✅ Free tier (10GB storage, 360MB/day transfer)
- ✅ Google infrastructure
- ✅ Great performance
- ✅ Easy SSL

### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   cd "c:\Users\Sharanraj\Documents\QUBO\Alphery website\alphery-website"
   firebase init hosting
   
   # Select:
   # - Create new project or use existing
   # - Public directory: dist
   # - Single-page app: Yes
   # - GitHub deploys: No (or Yes if you want)
   ```

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🐳 Option 5: Deploy with Docker (Advanced)

For containerized deployment:

1. **Create `Dockerfile`**
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Create `nginx.conf`**
   ```nginx
   server {
     listen 80;
     location / {
       root /usr/share/nginx/html;
       index index.html;
       try_files $uri $uri/ /index.html;
     }
   }
   ```

3. **Build and Run**
   ```bash
   docker build -t alphery-website .
   docker run -p 80:80 alphery-website
   ```

---

## 🎯 Option 6: Deploy to AWS S3 + CloudFront

For enterprise-grade hosting:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   - Go to AWS S3 Console
   - Create bucket (e.g., alphery-website)
   - Enable static website hosting
   - Upload `dist` folder contents

3. **Configure CloudFront**
   - Create CloudFront distribution
   - Origin: Your S3 bucket
   - Enable HTTPS
   - Set default root object: `index.html`

4. **Update DNS**
   - Point your domain to CloudFront distribution

---

## 📊 Post-Deployment Checklist

After deployment:

- [ ] Test website on mobile devices
- [ ] Verify all links work
- [ ] Test contact form (if connected to backend)
- [ ] Check page load speed (use Google PageSpeed Insights)
- [ ] Verify SEO meta tags (use Meta Tags debugger)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test social media sharing (Facebook, Twitter, LinkedIn)
- [ ] Verify HTTPS is working
- [ ] Check all pages in different browsers

---

## 🔧 Performance Optimization

After deployment, optimize further:

1. **Enable Compression**
   - Most platforms do this automatically
   - For custom servers, enable gzip/brotli

2. **Set Cache Headers**
   ```
   Cache-Control: public, max-age=31536000 (for static assets)
   Cache-Control: no-cache (for index.html)
   ```

3. **Monitor Performance**
   - Use Google PageSpeed Insights
   - Use Lighthouse in Chrome DevTools
   - Target: 90+ performance score

---

## 🔍 SEO Setup Post-Deployment

1. **Google Search Console**
   - Add your property
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
   - Verify ownership

2. **Google Analytics** (Optional)
   - Create GA4 property
   - Add tracking code to `index.html`

3. **Bing Webmaster Tools**
   - Add your site
   - Submit sitemap

---

## 🆘 Troubleshooting

### Issue: 404 on Refresh
**Solution:** Configure server to redirect all routes to `index.html`
- Vercel/Netlify: Auto-configured
- Others: See platform-specific SPA config

### Issue: Slow Loading
**Solution:** 
- Check bundle size: `npm run build` (should be < 500KB)
- Use compression
- Enable CDN

### Issue: CSS Not Loading
**Solution:** 
- Check `base` URL in `vite.config.js`
- Verify file paths are relative

---

## 📞 Support

If you need help with deployment, contact your hosting provider's support or check their documentation.

---

## 🎉 Recommended: Vercel

For the fastest and easiest deployment, we recommend **Vercel**:
1. Push to GitHub
2. Import to Vercel
3. Deploy (automatic)
4. ✅ Live in 60 seconds!

**Your website will be live at:** `https://alphery-website.vercel.app`

Then add your custom domain in settings.

---

**Good luck with your deployment! 🚀**
