# Alphery IT Solutions Website

A modern, futuristic, and high-performance website for Alphery IT Solutions built with React and Vite.

## 🚀 Features

- **Blazing Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Modern Design**: Futuristic UI with glassmorphism, gradients, and smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: 
  - Comprehensive meta tags for search engines
  - Semantic HTML5 structure
  - Open Graph and Twitter Card support
  - Structured data (JSON-LD) for rich snippets
  - Optimized heading hierarchy
- **Performance Optimized**:
  - Code splitting and lazy loading
  - Optimized font loading with preconnect
  - Minimal bundle size
  - Fast Time to Interactive (TTI)
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **CSS3** - Custom properties, animations, and modern layouts
- **Google Fonts** - Inter & Orbitron for premium typography

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development

The development server runs at `http://localhost:5173/`

Hot Module Replacement (HMR) is enabled for instant updates during development.

## 🎨 Design System

The website uses a comprehensive design system with:

- **Color Palette**: Cyan (#00d4ff), Purple (#7b2ff7), Pink (#ff006e)
- **Typography**: Orbitron for headings, Inter for body text
- **Spacing**: Consistent spacing scale (0.5rem to 6rem)
- **Components**: Reusable card, button, and layout components
- **Animations**: Smooth transitions and micro-interactions

## 📄 Sections

1. **Hero** - Eye-catching introduction with animated background and CTA
2. **Services** - Showcase of 8 core IT services with keywords
3. **About** - Company information and values
4. **Technologies** - Tech stack visualization
5. **Why Choose Us** - Key differentiators and benefits
6. **Contact** - Contact form and information
7. **Footer** - Links, social media, and legal information

## 🔧 Performance Optimization

- **Vite's fast build system** - HMR in <100ms
- **Tree-shaking** - Eliminates dead code
- **Code splitting** - Loads only what's needed
- **Asset optimization** - Optimized images and fonts
- **CSS optimization** - Minimal, efficient stylesheets

## 🌍 SEO Features

The website is fully optimized for search engines:

- Meta descriptions with relevant keywords
- Open Graph tags for social media
- Structured data (JSON-LD) for rich snippets
- Semantic HTML5 elements
- Optimized heading hierarchy (H1-H4)
- Alt text for images (when added)
- Fast page load times (< 2s)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📝 Customization

### Update Content

- **Company Info**: Edit `src/components/About.jsx`
- **Services**: Modify `src/components/Services.jsx`
- **Contact Info**: Update `src/components/Contact.jsx`
- **SEO Meta**: Edit `index.html`

### Styling

- **Colors**: Update CSS variables in `src/index.css`
- **Typography**: Modify font imports in `index.html`
- **Components**: Edit individual component CSS files

## 📊 Performance Metrics

Target performance metrics:

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.0s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Performance Score**: > 90

## 🔐 Security

- No inline scripts (CSP friendly)
- Sanitized form inputs
- HTTPS recommended for production

## 📄 License

© 2024 Alphery IT Solutions. All rights reserved.

## 🤝 Support

For support, email info@alphery.com or contact us through the website form.

---

**Built with ❤️ using React + Vite**
