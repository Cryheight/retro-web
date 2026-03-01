# Han Portfolio - Documentation

## Overview
A luxury dark-themed portfolio website for a frontend artist, featuring elegant gold and purple accents, smooth animations, and a responsive design.

**Live Demo:** https://hcoxygv7zvfvo.ok.kimi.link

---

## Table of Contents
1. [Project Structure](#project-structure)
2. [Modifying Content](#modifying-content)
3. [Changing Images](#changing-images)
4. [Changing Colors & Styling](#changing-colors--styling)
5. [Deployment Guide](#deployment-guide)
6. [Troubleshooting](#troubleshooting)

---

## Project Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/              # All portfolio images
│       ├── han-portrait.jpg # Hero image
│       └── portfolio-1.jpg  # Gallery images (1-20)
├── src/
│   ├── pages/
│   │   ├── HomePage.tsx     # Home page component
│   │   ├── GalleryPage.tsx  # Gallery page component
│   │   └── AboutPage.tsx    # About page component
│   ├── App.tsx              # Main app with navigation
│   ├── index.css            # Global styles & theme colors
│   └── main.tsx             # Entry point
├── dist/                    # Build output (generated)
└── index.html
```

---

## Modifying Content

### 1. Changing Personal Information

Edit `/mnt/okcomputer/output/app/src/App.tsx`:

```tsx
// Line ~160 - Footer contact info
<div className="flex items-center gap-3 text-white/60 text-sm">
  <MapPin size={16} className="text-[#c9a227]" />
  <span>YOUR NEW ADDRESS</span>
</div>
<div className="flex items-center gap-3 text-white/60 text-sm">
  <Mail size={16} className="text-[#c9a227]" />
  <span>your.email@example.com</span>
</div>
<div className="flex items-center gap-3 text-white/60 text-sm">
  <Phone size={16} className="text-[#c9a227]" />
  <span>+1 (YOUR) PHONE-NUMBER</span>
</div>
```

### 2. Changing Social Media Links

Edit `/mnt/okcomputer/output/app/src/App.tsx` (Line ~180):

```tsx
{[
  { icon: Github, href: 'https://github.com/YOUR_USERNAME' },
  { icon: Twitter, href: 'https://twitter.com/YOUR_HANDLE' },
  { icon: Instagram, href: 'https://instagram.com/YOUR_HANDLE' },
  { icon: Linkedin, href: 'https://linkedin.com/in/YOUR_PROFILE' },
].map((social, i) => (
```

Also update in `/mnt/okcomputer/output/app/src/pages/AboutPage.tsx` (Line ~120).

### 3. Changing Hero Text

Edit `/mnt/okcomputer/output/app/src/pages/HomePage.tsx`:

```tsx
// Line ~35 - Main headline
<h1 className="reveal opacity-0 mt-6 text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight" style={{ animationDelay: '100ms' }}>
  HI, I'M <span className="text-gradient-gold">YOUR_NAME</span>
</h1>

// Line ~39 - Subtitle
<h2 className="reveal opacity-0 mt-4 text-xl md:text-2xl text-white/80 font-mono" style={{ animationDelay: '200ms' }}>
  Your Title & Role
</h2>

// Line ~42 - Description
<p className="reveal opacity-0 mt-6 text-white/60 leading-relaxed max-w-lg" style={{ animationDelay: '300ms' }}>
  Your custom description here...
</p>
```

### 4. Changing Philosophy Text

Edit `/mnt/okcomputer/output/app/src/pages/AboutPage.tsx` (Line ~85):

```tsx
<div className="mt-6 space-y-4 text-white/70 leading-relaxed">
  <p>Your philosophy paragraph 1...</p>
  <p>Your philosophy paragraph 2...</p>
  <p>Your philosophy paragraph 3...</p>
</div>
```

---

## Changing Images

### Hero Portrait Image

1. Replace the file at:
   ```
   /mnt/okcomputer/output/app/public/images/han-portrait.jpg
   ```

2. Recommended size: 600x800 pixels (3:4 ratio)

3. After replacing, rebuild:
   ```bash
   cd /mnt/okcomputer/output/app
   npm run build
   cp -r public/images dist/
   ```

### Gallery Images

1. Replace any image in:
   ```
   /mnt/okcomputer/output/app/public/images/portfolio-1.jpg
   /mnt/okcomputer/output/app/public/images/portfolio-2.jpg
   ...
   /mnt/okcomputer/output/app/public/images/portfolio-20.jpg
   ```

2. Recommended size: 800x600 pixels (4:3 ratio)

3. To update image titles/categories, edit `/mnt/okcomputer/output/app/src/pages/GalleryPage.tsx`:

```tsx
const portfolioImages = [
  { src: '/images/portfolio-1.jpg', title: 'YOUR TITLE', category: 'YOUR CATEGORY' },
  // ... more images
];
```

### Adding More Gallery Images

1. Add new image to `/mnt/okcomputer/output/app/public/images/`

2. Add entry in GalleryPage.tsx:

```tsx
{ src: '/images/portfolio-21.jpg', title: 'New Project', category: 'Web Design' },
```

3. Update the grid in GalleryPage.tsx if needed (currently 4 columns on desktop).

---

## Changing Colors & Styling

### Primary Colors

Edit `/mnt/okcomputer/output/app/src/index.css`:

```css
:root {
  --gold: 45 80% 55%;        /* Gold accent - #c9a227 */
  --purple: 270 60% 55%;     /* Purple accent - #8b5cf6 */
  --dark-bg: 0 0% 8%;        /* Dark background - #141414 */
  --dark-card: 0 0% 12%;     /* Card background - #1a1a1a */
}
```

### Changing Gold Accent

Find and replace all instances of `#c9a227` with your new color (e.g., `#ff6b35` for orange):

```bash
cd /mnt/okcomputer/output/app/src
sed -i 's/#c9a227/#ff6b35/g' *.tsx *.css
```

### Changing Purple Accent

Find and replace all instances of `#8b5cf6` with your new color (e.g., `#00d4aa` for teal):

```bash
cd /mnt/okcomputer/output/app/src
sed -i 's/#8b5cf6/#00d4aa/g' *.tsx *.css
```

### Changing Background Color

Edit `/mnt/okcomputer/output/app/src/index.css`:

```css
--background: 0 0% 8%;  /* Change 8% to your desired lightness */
```

Or for a completely different color:

```css
--background: 220 50% 10%;  /* Dark blue background */
```

---

## Deployment Guide

### Option 1: Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   cd /mnt/okcomputer/output/app/dist
   vercel --prod
   ```

3. Follow the prompts to create an account and deploy.

### Option 2: Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Deploy:
   ```bash
   cd /mnt/okcomputer/output/app/dist
   netlify deploy --prod --dir=.
   ```

### Option 3: Deploy to GitHub Pages

1. Create a GitHub repository

2. Push the dist folder:
   ```bash
   cd /mnt/okcomputer/output/app/dist
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. Enable GitHub Pages in repository settings

### Option 4: Deploy to WordPress

**Method A: Using a Static Site Plugin**

1. Install "Simply Static" plugin on WordPress

2. Export this site as static HTML:
   ```bash
   cd /mnt/okcomputer/output/app/dist
   zip -r site.zip .
   ```

3. Upload to WordPress via Simply Static

**Method B: Using WordPress as Headless CMS**

1. Set up WordPress with WP REST API

2. Create custom theme or use a page builder that supports custom HTML

3. Upload the built files to `/wp-content/themes/your-theme/`

### Option 5: Deploy to Wix

1. In Wix Editor, go to **Settings > Tracking & Analytics**

2. Or use Wix Code to embed custom HTML:
   - Add an HTML iframe element
   - Upload files to an external host
   - Reference them in the iframe

**Better approach for Wix:**

1. Use Wix's built-in portfolio templates

2. Or host this site separately and link to it from Wix

### Option 6: Deploy to Traditional Hosting (cPanel/FTP)

1. Build the project:
   ```bash
   cd /mnt/okcomputer/output/app
   npm run build
   cp -r public/images dist/
   ```

2. Upload all files from `dist/` folder to your web host via FTP

3. Ensure `index.html` is at the root

---

## Troubleshooting

### Images Not Loading

1. Check that images are in the `dist/images/` folder
2. Verify image paths start with `/images/`
3. Rebuild and redeploy:
   ```bash
   npm run build
   cp -r public/images dist/
   ```

### Styles Not Applied

1. Clear browser cache (Ctrl+Shift+R)
2. Check for CSS syntax errors in `index.css`
3. Rebuild the project

### Navigation Not Working

1. Check that all page components exist in `src/pages/`
2. Verify routes in `App.tsx`

### Build Errors

1. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check for TypeScript errors:
   ```bash
   npx tsc --noEmit
   ```

---

## Customization Checklist

- [ ] Update name in hero section
- [ ] Update title/subtitle
- [ ] Update description text
- [ ] Replace hero portrait image
- [ ] Update contact information
- [ ] Update social media links
- [ ] Replace gallery images
- [ ] Update gallery image titles/categories
- [ ] Customize philosophy text
- [ ] Adjust colors (optional)
- [ ] Rebuild and test
- [ ] Deploy to chosen platform

---

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** JetBrains Mono, Inter

---

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the code comments in each file
3. Refer to React and Tailwind CSS documentation

---

**Happy customizing!** 🎨
