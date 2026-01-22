# Implementation Plan: alkis.ai Personal Website

## Overview
Create a minimal yet unique one-page website for alkis.ai using plain HTML/CSS/JS. The design will be clean and minimal with unique touches that reflect your background as a design engineer and entrepreneur.

## Design Philosophy
**"Dark brutalist meets Swiss design with motion design touches"**

- **Dark mode only**: Deep black background with crisp white text for modern, professional look
- Bold typography hierarchy with oversized headings
- High contrast with electric blue accent (#0066FF) for CTAs
- Subtle animated geometric shapes and micro-interactions
- Asymmetric layout with intentional grid breaks
- Generous whitespace for premium feel
- System fonts + IBM Plex Mono for metrics
- **Mobile-first approach**: Designed for mobile, enhanced for desktop

## File Structure
```
/Users/alkaros/Development/alkis_personal_page/
├── index.html              # Main HTML structure
├── styles.css              # Complete styling system
├── script.js               # Interactive elements
├── assets/
│   └── alkis-photo.jpg     # Your header image (you'll add this)
└── README.md               # Deployment notes
```

## Content Sections (in order)
1. **Hero**: Profile image + name "Alkis"
2. **Who is this guy?**: Design Engineer intro, SF location
3. **What have you done?**: Gospic, EB1-A, $1M ARR studio, Daikin/Andromeda work, 4 AI apps
4. **What do you do now?**: AGORA AI description
5. **Contact**: Investment/Services options + pr.alkis@vuel.app

## Key Design Elements

### Typography (Mobile-First with Fluid Scaling)
- Hero name: clamp(48px, 8vw, 96px) bold - scales smoothly from mobile to desktop
- Section headings: clamp(28px, 5vw, 40px) bold
- Body: clamp(16px, 2.5vw, 20px) - ensures readability on all screens
- Metrics: clamp(18px, 3vw, 24px) IBM Plex Mono
- Line height: 1.6 for optimal mobile readability

### Colors (Dark Mode)
- Background: #0A0A0A (deep black)
- Text: #F5F5F5 (off-white, easier on eyes than pure white)
- Accent: #0066FF (electric blue for links/CTAs)
- Subtle: #2A2A2A (borders/dividers)
- Hover: #FFFFFF (pure white for emphasis)

### Interactive Features
- Scroll progress indicator (thin line at top)
- Section fade-ins as you scroll
- Hover effects on achievements (scale + accent underline)
- Geometric background circles with parallax
- Magnetic effect on contact button

## Implementation Steps

### 1. Create index.html
- Semantic HTML5 structure
- Meta tags for SEO (title, description, Open Graph, Twitter Card)
- Profile image + name in hero section
- All 5 content sections with proper heading hierarchy
- Email link: pr.alkis@vuel.app
- Link to styles.css and script.js

### 2. Create styles.css (Mobile-First Approach)
- CSS custom properties for dark mode colors/spacing
- Reset and base styles
- **Mobile-first base styles** - design for 375px width first
- Typography scale with fluid sizing using clamp() - no breakpoints needed for text
- Max content width: 800px with padding: 20px mobile, 40px desktop
- CSS Grid for layout (single column mobile, enhanced for desktop)
- Achievement list with custom bullets and hover states
- Contact section with three blocks (stack on mobile, grid on desktop)
- Background decoration positioning (2 circles, subtle in dark mode)
- Scroll progress bar styles (electric blue)
- Fade-in animation classes
- **Desktop enhancements** (@media min-width: 768px) - progressive enhancement only

### 3. Create script.js
- Scroll progress bar calculation (requestAnimationFrame)
- Intersection Observer for section fade-ins
- Parallax effect for background decorations
- Magnetic button effect for contact section
- Debounced scroll events for performance

### 4. Create README.md
- Deployment instructions for Vercel/Netlify/GitHub Pages
- Domain setup steps for alkis.ai
- Notes on adding/optimizing profile image
- Maintenance tips

### 5. Image Preparation
- Add your profile photo to assets/alkis-photo.jpg
- Optimize to <200KB
- Consider WebP format with JPG fallback

## Mobile-First Responsive Strategy
**Base design targets mobile (375px - 768px)**
- Single column layout
- Touch-friendly tap targets (min 44px)
- Generous padding (20px sides)
- Stacked sections with clear hierarchy
- Reduced motion on mobile to save battery
- Font sizes optimized for readability without zooming

**Desktop enhancements (768px+)**
- Wider content area (max 800px)
- Larger typography and spacing
- More prominent background decorations
- Enhanced hover states and animations
- Asymmetric layouts where appropriate

**Testing priorities:**
1. iPhone SE (375px) - smallest common screen
2. iPhone 13/14 (390px) - most common
3. iPad (768px) - tablet breakpoint
4. Desktop (1440px+) - enhanced experience

## Unique Design Touches
- Achievement bullets: Large colored circles with slide-in underline on hover (desktop only)
- Numbers/metrics: Monospace font in electric blue accent
- Contact blocks: Background shifts to accent on hover, text inverts (touch-friendly on mobile)
- Profile image: Circular (120px mobile, 160px desktop), centered on mobile
- Location emoji: Slightly larger and offset from text
- Dark mode geometric circles: Subtle with low opacity (#0066FF at 5%) for depth

## Critical Files to Create
- [index.html](/Users/alkaros/Development/alkis_personal_page/index.html)
- [styles.css](/Users/alkaros/Development/alkis_personal_page/styles.css)
- [script.js](/Users/alkaros/Development/alkis_personal_page/script.js)
- [README.md](/Users/alkaros/Development/alkis_personal_page/README.md)

## Deployment Strategy
**Recommended: Vercel**
- Free tier with automatic HTTPS
- Global CDN for fast loading
- Simple custom domain setup
- Deploy command: `vercel --prod` or connect GitHub repo

**Domain Setup:**
1. Add A record or CNAME in alkis.ai registrar
2. Follow Vercel's custom domain instructions
3. Enable HTTPS (automatic)
4. Set up www redirect

## Verification Plan

### Pre-deployment Testing (Mobile-First Priority)
1. **Mobile Visual Testing**:
   - Test on iPhone SE (375px) first - if it works here, it works everywhere
   - Verify text is readable without zooming
   - Check all sections render correctly with proper spacing
   - Ensure profile image displays well on small screens

2. **Mobile Interactive Testing**:
   - Test touch interactions (tap email link, scroll smoothly)
   - Verify progress bar updates during scroll
   - Check sections fade in appropriately
   - Ensure no horizontal scroll on any mobile size

3. **Desktop Enhancement Testing**:
   - Open in browser at 1440px+ width
   - Verify hover states work on achievements
   - Check magnetic button effect in contact section
   - Ensure background decorations are visible but subtle

4. **Real Device Testing** (Critical):
   - Test on actual iPhone (not just DevTools)
   - Test on actual Android device
   - Verify fonts render correctly on both platforms
   - Check performance on slower mobile devices

5. **Link & Performance Testing**:
   - Click email link, verify it opens mail client with pr.alkis@vuel.app
   - Check load time on 3G connection (<3 seconds)
   - Verify images are optimized (<200KB total)

### Post-deployment Verification
1. Visit alkis.ai in browser, verify HTTPS is working
2. Test on multiple devices (desktop, mobile, tablet)
3. Share URL on social media, verify Open Graph preview looks correct
4. Test www.alkis.ai redirects to alkis.ai
5. Verify all interactive features work in production

### Quality Checks
- [ ] HTML validates at validator.w3.org
- [ ] No console errors in browser (check on both mobile and desktop)
- [ ] All text content matches provided copy
- [ ] Profile image displays correctly on mobile and desktop
- [ ] Email link works (pr.alkis@vuel.app) on both touch and click
- [ ] **Dark mode colors are correct**: black background, white text, blue accent
- [ ] **Mobile layout is perfect**: No horizontal scroll, readable without zoom, touch targets are 44px+
- [ ] **Text contrast meets WCAG AA** (4.5:1 minimum) - white on black is 21:1 ✓
- [ ] Animations are smooth (60fps) and reduced on mobile if needed
- [ ] Page loads quickly on mobile 3G (<3s) and desktop (<2s)
- [ ] Viewport meta tag prevents zooming issues
- [ ] iPhone safe area respected (notch padding)

## Success Criteria
- Single-page site that's significantly more unique and polished than Notion
- **Dark mode only** with high contrast and modern aesthetic
- **Perfect mobile experience** - looks great on iPhone, no zoom needed, fast and smooth
- Fast loading with no dependencies or build process
- Fully responsive (mobile-first, enhanced for desktop)
- Live at alkis.ai with proper SEO/social sharing meta tags
- Reflects your identity as a design engineer entrepreneur
- Works flawlessly on both iOS and Android devices
