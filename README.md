# alkis.ai - Personal Website

A minimal, dark-mode personal website for Alkis - Design Engineer & Entrepreneur.

## Tech Stack

- **Pure HTML/CSS/JS** - No frameworks, no build tools
- **Mobile-first design** - Optimized for all devices
- **Dark mode only** - Modern aesthetic with high contrast
- **Performance-focused** - Fast loading, smooth animations

## Project Structure

```
alkis_personal_page/
├── index.html         # Main HTML file
├── styles.css         # All styles (mobile-first, dark mode)
├── script.js          # Interactive features
├── assets/
│   └── alkis-photo.jpg  # Your profile photo (add this!)
├── PLAN.md            # Implementation plan
└── README.md          # This file
```

## Setup & Development

### 1. Add Your Profile Photo

Place your profile photo in the `assets` folder with the filename `alkis-photo.jpg`.

**Requirements:**
- Filename: `alkis-photo.jpg`
- Recommended size: 400x400px
- Optimize to <200KB for fast loading
- Tools: [TinyJPG](https://tinyjpg.com) or [Squoosh](https://squoosh.app)

### 2. Preview Locally

Open `index.html` directly in your browser, or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### 3. Test on Mobile

Use browser DevTools to test responsive design:
- Chrome: `Cmd+Option+I` → Toggle device toolbar
- Test these sizes:
  - iPhone SE (375px)
  - iPhone 13/14 (390px)
  - iPad (768px)
  - Desktop (1440px+)

## Deployment to alkis.ai

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Free tier with unlimited bandwidth
- Automatic HTTPS
- Global CDN (fast worldwide)
- Easy custom domain setup
- Zero configuration needed

**Deploy Steps:**

1. Install Vercel CLI (one-time):
   ```bash
   npm install -g vercel
   ```

2. Deploy from project directory:
   ```bash
   cd /Users/alkaros/Development/alkis_personal_page
   vercel
   ```

3. Follow prompts:
   - Setup and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No**
   - Project name: `alkis-personal-page`
   - Directory: `./` (press Enter)
   - Override settings? **No**

4. Production deployment:
   ```bash
   vercel --prod
   ```

5. Add custom domain:
   ```bash
   vercel domains add alkis.ai
   ```

   Then follow the DNS instructions Vercel provides.

**DNS Configuration:**
- Type: `A Record`
- Name: `@` (or leave blank)
- Value: `76.76.21.21` (Vercel's IP)

For www subdomain:
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### Option 2: Netlify

1. Drag and drop your entire project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Custom domain: Site settings → Domain management → Add custom domain
3. Follow DNS instructions

### Option 3: GitHub Pages

1. Create a GitHub repo
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/alkis.ai.git
   git push -u origin main
   ```
3. Settings → Pages → Source: `main` branch → Save
4. Add custom domain in Settings → Pages → Custom domain

## Customization

### Update Content

Edit `index.html` to change:
- Your name and bio
- Achievements
- Current projects
- Contact information

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --color-bg: #0A0A0A;        /* Background */
  --color-text: #F5F5F5;      /* Text */
  --color-accent: #0066FF;    /* Links/CTAs */
  --color-subtle: #2A2A2A;    /* Borders */
  --color-hover: #FFFFFF;     /* Hover states */
}
```

### Adjust Spacing

Modify spacing variables in `styles.css`:

```css
:root {
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 40px;
  --spacing-xl: 60px;
  --spacing-2xl: 80px;
  --spacing-3xl: 120px;
}
```

### Typography

Change font sizes using `clamp()` for fluid scaling:

```css
h1 {
  font-size: clamp(48px, 8vw, 96px);
}
```

## Performance Optimization

### Before Deployment

1. **Optimize Image:**
   ```bash
   # Using ImageOptim (macOS)
   # Or online: tinyjpg.com, squoosh.app
   ```

2. **Test Load Speed:**
   - Open DevTools → Network tab
   - Throttle to "Fast 3G"
   - Should load in <3 seconds

3. **Validate HTML:**
   - Visit [W3C Validator](https://validator.w3.org/)
   - Upload your `index.html`

### Post-Deployment

1. **Test on Real Devices:**
   - iPhone (Safari)
   - Android (Chrome)
   - Desktop (Chrome, Firefox, Safari)

2. **Check Performance:**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [WebPageTest](https://www.webpagetest.org/)
   - Target: 90+ score on mobile

3. **Test Social Sharing:**
   - [Open Graph Debugger](https://www.opengraph.xyz/)
   - Share on Twitter/LinkedIn to verify preview

## Features

- **Scroll Progress Bar**: Shows reading progress at top
- **Fade-in Animations**: Sections reveal as you scroll
- **Parallax Background**: Subtle depth effect (desktop only)
- **Magnetic Button**: Contact CTA follows cursor (desktop only)
- **Responsive Design**: Perfect on all screen sizes
- **Reduced Motion**: Respects user accessibility preferences
- **Touch-Friendly**: 44px minimum tap targets on mobile

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari 12+
- Android Chrome

## Maintenance

### Updating Content

1. Edit `index.html`
2. Test locally
3. Deploy: `vercel --prod` (or push to GitHub)

### Adding New Sections

1. Add HTML in `index.html`:
   ```html
   <section class="new-section section-fade">
     <h2>Section Title</h2>
     <p>Content here</p>
   </section>
   ```

2. Add styles in `styles.css` if needed

3. JavaScript will automatically handle fade-in animations

## Troubleshooting

### Image Not Showing

- Check filename: Must be exactly `alkis-photo.jpg`
- Check location: Must be in `assets/` folder
- Check file size: Should be <200KB

### Slow Loading

- Compress images: Use TinyJPG
- Check file sizes: Total page should be <500KB
- Test network: Use DevTools → Network tab

### Layout Issues on Mobile

- Test in DevTools: Toggle device toolbar
- Check viewport meta tag in `index.html`
- Verify no fixed widths in CSS

### Animations Not Working

- Check JavaScript console for errors
- Verify `script.js` is loaded
- Check Intersection Observer support

## Contact

For questions or support:
- Email: pr.alkis@vuel.app

## License

Personal website - All rights reserved.
