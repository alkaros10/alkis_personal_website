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
   Portfolio Lightbox
   =================================== */
function initPortfolioLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  const closeBtn = lightbox.querySelector('.lightbox-close');
  const titleEl = lightbox.querySelector('#lightbox-title');
  const descEl = lightbox.querySelector('#lightbox-description');
  const imgEl = lightbox.querySelector('#lightbox-image');
  const placeholderEl = lightbox.querySelector('#lightbox-placeholder');

  if (!closeBtn || !titleEl || !descEl || !imgEl || !placeholderEl) return;

  let lastFocused = null;

  function openLightbox(card) {
    const titleNode = card.querySelector('.portfolio-title');
    const descNode = card.querySelector('.portfolio-impact');
    const title = titleNode ? titleNode.textContent.trim() : '';
    const description = descNode ? descNode.textContent.trim() : '';
    const img = card.querySelector('.portfolio-media img');

    titleEl.textContent = title;
    descEl.textContent = description;

    if (img && img.getAttribute('src')) {
      imgEl.src = img.currentSrc || img.src;
      imgEl.alt = img.alt || title || 'Project preview';
      imgEl.style.display = 'block';
      placeholderEl.style.display = 'none';
    } else {
      imgEl.removeAttribute('src');
      imgEl.alt = '';
      imgEl.style.display = 'none';
      placeholderEl.style.display = 'block';
    }

    lastFocused = document.activeElement;
    document.body.classList.add('no-scroll');
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');

    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
    lastFocused = null;
  }

  const cards = document.querySelectorAll('.portfolio-card');
  cards.forEach((card) => {
    const titleEl = card.querySelector('.portfolio-title');
    const projectName = titleEl ? titleEl.textContent.trim() : 'project';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Expand ${projectName}`);

    card.addEventListener('click', () => openLightbox(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        openLightbox(card);
      }
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
}

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
document.addEventListener('DOMContentLoaded', initPortfolioLightbox);
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
