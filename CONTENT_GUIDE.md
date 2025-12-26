# Alphery Website - Content Customization Guide

This guide will help you update the website content with your company's specific information.

## 📝 How to Update Content

Since I couldn't read your Word document, I've created placeholder content. Follow this guide to update it with your actual content.

---

## 🏠 1. Hero Section (Homepage)

**File:** `src/components/Hero.jsx`

### What to Update:

**Line 31-33** - Main Headline:
```jsx
<h1 className="hero-title slide-in-left">
  Transform Your Business with
  <span className="gradient-text"> Cutting-Edge Technology</span>
</h1>
```
👉 Replace with your main headline from the Word doc

**Line 35-39** - Hero Description:
```jsx
<p className="hero-description slide-in-left">
  Alphery delivers innovative IT solutions...
</p>
```
👉 Replace with your company description

**Line 42-56** - Statistics:
```jsx
<div className="stat-number">500+</div>
<div className="stat-label">Projects Delivered</div>
```
👉 Update numbers with your actual stats (Projects, Client Satisfaction %, Years Experience)

---

## 🛠️ 2. Services Section

**File:** `src/components/Services.jsx`

### What to Update:

**Lines 4-79** - Services Array:

Each service has:
- `icon` - Emoji icon (keep or change)
- `title` - Service name
- `description` - Service description
- `keywords` - SEO keywords

**Example:**
```jsx
{
  icon: '💻',
  title: 'Custom Software Development',
  description: 'YOUR DESCRIPTION FROM WORD DOC',
  keywords: ['Web Apps', 'Mobile Apps', 'Enterprise Software', 'API Development']
}
```

👉 Replace with your services from the Word document
👉 Update keywords with SEO keywords from your document

---

## ℹ️ 3. About Section

**File:** `src/components/About.jsx`

### What to Update:

**Lines 10-20** - About Text:
```jsx
<p>
  Since our founding, Alphery has been...
</p>
```
👉 Replace both paragraphs with your company story

**Lines 22-42** - Company Values:
```jsx
<div className="value-item">
  <div className="value-icon">🎯</div>
  <div>
    <h4>Mission-Driven</h4>
    <p>Empowering businesses through innovative technology solutions</p>
  </div>
</div>
```
👉 Update with your actual values/mission

**Lines 52-64** - Statistics Overlay:
```jsx
<div className="overlay-number">15+</div>
<div className="overlay-label">Years Excellence</div>
```
👉 Update with your company stats

---

## 💻 4. Technologies Stack

**File:** `src/components/Technologies.jsx`

### What to Update:

**Lines 5-18** - Tech Stack Array:
```jsx
const techStack = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  // ... more technologies
];
```

👉 Replace with technologies you actually use
👉 Keep the format: name, icon (emoji), category

---

## ✨ 5. Why Choose Us

**File:** `src/components/WhyChooseUs.jsx`

### What to Update:

**Lines 4-31** - Reasons Array:
```jsx
{
  title: 'Expert Team',
  description: 'Our certified professionals bring years...',
  icon: '👥'
}
```

👉 Replace with your unique selling points
👉 Keep 6 reasons or add more (will auto-adjust to grid)

---

## 📧 6. Contact Information

**File:** `src/components/Contact.jsx`

### What to Update:

**Lines 52-53** - Email:
```jsx
<h4>Email Us</h4>
<a href="mailto:info@alphery.com">info@alphery.com</a>
```
👉 Replace with your actual email

**Lines 59-60** - Phone:
```jsx
<h4>Call Us</h4>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```
👉 Replace with your actual phone number

**Lines 66-67** - Address:
```jsx
<h4>Visit Us</h4>
<p>123 Tech Street, Silicon Valley, CA 94025</p>
```
👉 Replace with your actual address

**Lines 73-76** - Social Media:
```jsx
<a href="#" className="social-icon">💼</a> <!-- LinkedIn -->
<a href="#" className="social-icon">🐦</a> <!-- Twitter -->
```
👉 Update `href="#"` with your actual social media URLs

---

## 🔍 7. SEO Optimization

**File:** `index.html`

### What to Update:

**Lines 7-9** - Meta Description:
```html
<meta name="description" content="Alphery - Leading IT Solutions..." />
```
👉 Replace with your SEO-optimized description (150-160 characters)

**Line 10** - Keywords:
```html
<meta name="keywords" content="IT solutions, software development..." />
```
👉 Replace with keywords from your Word document

**Lines 14-18** - Open Graph (Social Media):
```html
<meta property="og:title" content="Alphery - Innovative IT Solutions" />
<meta property="og:description" content="Transform your business..." />
```
👉 Update for better social media sharing

**Line 26** - Page Title:
```html
<title>Alphery - Innovative IT Solutions & Technology Services</title>
```
👉 Update with your preferred title (60 characters max)

**Lines 29-39** - Structured Data:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Alphery",
  "url": "https://alphery.com",
  ...
}
```
👉 Update with your actual website URL and social media links

---

## 🎨 8. Styling & Colors (Optional)

**File:** `src/index.css`

### To Change Brand Colors:

**Lines 8-14** - Color Variables:
```css
--color-primary: #00d4ff;        /* Main cyan color */
--color-secondary: #7b2ff7;      /* Purple accent */
--color-accent: #ff006e;         /* Pink accent */
```

👉 Replace hex codes with your brand colors

---

## 📱 9. Footer

**File:** `src/components/Footer.jsx`

### What to Update:

**Lines 10-30** - Footer Links:
```jsx
const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    // ... more links
  ],
  // ...
};
```
👉 Add/remove links as needed

**Lines 48-51** - Social Media:
```jsx
<a href="#" className="social-icon">💼</a>
```
👉 Update with your actual social media URLs

**Line 76** - Copyright:
```jsx
<p>&copy; {currentYear} Alphery IT Solutions. All rights reserved.</p>
```
👉 Update company name if needed

---

## 🚀 Quick Start Checklist

1. ✅ Update Hero headline and description
2. ✅ Replace Services with your actual services
3. ✅ Update About section with your company story
4. ✅ Add your Technologies stack
5. ✅ Update Why Choose Us reasons
6. ✅ Replace Contact information (email, phone, address)
7. ✅ Update SEO meta tags in index.html
8. ✅ Add social media links
9. ✅ Update Footer copyright
10. ✅ (Optional) Change brand colors

---

## 💡 Tips

- Keep descriptions concise and benefit-focused
- Use action-oriented language
- Include relevant keywords naturally for SEO
- Test the contact form after deployment
- Optimize images before adding them (use WebP format)
- Keep mobile users in mind - test responsiveness

---

## 🔧 Need Help?

After updating content:
1. Save all files
2. The dev server will auto-reload (Hot Module Replacement)
3. Check changes at http://localhost:5173/

---

## 📊 SEO Keywords to Include

Based on IT industry best practices, make sure to include:

- Primary: IT solutions, software development, technology services
- Secondary: cloud computing, cybersecurity, AI solutions
- Location: Your city/region name (if local SEO matters)
- Industry-specific: Your specializations

👉 **Extract keywords from your Word document and naturally incorporate them into:**
- Hero description
- Service descriptions  
- About text
- Meta tags

---

**Happy Customizing! 🎉**
