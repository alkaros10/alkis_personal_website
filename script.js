/* ===================================
   Scroll Progress Bar
   =================================== */
function updateScrollProgress() {
  const progressBar = document.querySelector('.progress-bar');
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Calculate scroll percentage
  const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

  // Update progress bar height
  progressBar.style.height = `${Math.min(scrollPercentage, 100)}%`;
}

// Update on scroll with requestAnimationFrame for performance
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateScrollProgress();
      ticking = false;
    });
    ticking = true;
  }
});

// Initial call
updateScrollProgress();

/* ===================================
   Intersection Observer for Fade-ins
   =================================== */
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15 // Trigger when 15% of element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: stop observing after animation (improves performance)
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections with fade-in class
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.section-fade');
  fadeElements.forEach(element => observer.observe(element));
});

/* ===================================
   Magnetic Button Effect (Desktop Only)
   =================================== */
function initMagneticEffect() {
  // Only on desktop
  if (window.innerWidth < 768) return;

  const ctaCard = document.querySelector('.contact-cta');
  if (!ctaCard) return;

  ctaCard.addEventListener('mousemove', (e) => {
    const rect = ctaCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate distance from center
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    // Apply subtle transform (max 10px movement)
    const moveX = deltaX * 10;
    const moveY = deltaY * 10;

    ctaCard.style.transform = `translate(${moveX}px, ${moveY}px) translateY(-4px)`;
  });

  ctaCard.addEventListener('mouseleave', () => {
    ctaCard.style.transform = '';
  });
}

// Initialize magnetic effect on load and resize
document.addEventListener('DOMContentLoaded', initMagneticEffect);
window.addEventListener('resize', () => {
  // Re-initialize on resize (desktop/mobile switch)
  if (window.innerWidth >= 768) {
    initMagneticEffect();
  }
});

/* ===================================
   Smooth Scroll for Email Link (Mobile)
   =================================== */
document.addEventListener('DOMContentLoaded', () => {
  const emailLink = document.querySelector('.email-link');

  // Add touch feedback for mobile
  if (emailLink && 'ontouchstart' in window) {
    emailLink.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.98)';
    });

    emailLink.addEventListener('touchend', function() {
      this.style.transform = '';
    });
  }
});

/* ===================================
   Performance: Disable animations during scroll
   =================================== */
let scrollTimer = null;
window.addEventListener('scroll', () => {
  // Clear existing timer
  if (scrollTimer !== null) {
    clearTimeout(scrollTimer);
  }

  // Set timer to remove scrolling class after scrolling stops
  scrollTimer = setTimeout(() => {
    scrollTimer = null;
  }, 150);
}, false);

/* ===================================
   Handle Resize Events (Debounced)
   =================================== */
let resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    updateScrollProgress();
  }, 250);
});

/* ===================================
   Console Easter Egg (Optional)
   =================================== */
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #0066FF;');
console.log('%cInterested in how this was built?', 'font-size: 14px; color: #F5F5F5;');
console.log('%cReach out at pr.alkis@vuel.app', 'font-size: 14px; color: #0066FF;');
