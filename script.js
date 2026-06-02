const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
let lastScrollY = 0;

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Progress Bar
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  
  if (scrollProgress) {
    scrollProgress.style.width = scrolled + '%';
  }

  // Navbar hide/show on scroll
  if (scrollTop > lastScrollY && scrollTop > 100) {
    navbar?.style.transform = 'translateY(-100%)';
  } else {
    navbar?.style.transform = 'translateY(0)';
  }
  
  lastScrollY = scrollTop;
});

// Navbar smooth transition
if (navbar) {
  navbar.style.transition = 'transform 0.3s ease, background 0.3s ease';
  navbar.style.position = 'fixed';
  navbar.style.top = '0';
  navbar.style.width = '100%';
  navbar.style.zIndex = '999';
  navbar.style.background = 'rgba(8, 7, 14, 0.8)';
  navbar.style.backdropFilter = 'blur(10px)';
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks?.classList.remove('active');
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .stat-card, .testimonial-card, .skill-card, .timeline-content, .pricing-card, .section h2').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Button interactions
document.querySelectorAll('.pricing-btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Counter animation
function animateCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(statNumber => {
    const text = statNumber.textContent;
    const number = parseInt(text.match(/\d+/)[0]);
    let current = 0;
    
    const increment = Math.ceil(number / 50);
    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        statNumber.textContent = text;
        clearInterval(timer);
      } else {
        statNumber.textContent = current + (text.includes('+') ? '+' : text.includes('%') ? '%' : text.includes('ore') ? ' ore' : '');
      }
    }, 20);
  });
}

// Trigger counter animation when section is visible
const statsSection = document.getElementById('stats');
if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        animateCounters();
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.5 });
  
  statsObserver.observe(statsSection);
}

// Add extra padding to body for fixed navbar
document.body.style.paddingTop = '60px';
