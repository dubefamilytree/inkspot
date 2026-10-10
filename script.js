window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 2300);
  }
});

const heroSlides = Array.from(document.querySelectorAll('.hero-slide'));

if (heroSlides.length > 1) {
  let heroIndex = 0;

  const updateHeroSlide = (nextIndex) => {
    heroSlides.forEach((slide, index) => {
      const isActive = index === nextIndex;
      slide.classList.toggle('is-active', isActive);

      const video = slide.querySelector('video');
      if (video) {
        if (isActive) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  };

  setInterval(() => {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    updateHeroSlide(heroIndex);
  }, 6000);
}

const slider = document.querySelector('[data-slider]');
const slides = Array.from(document.querySelectorAll('.slide'));
const nextBtn = document.querySelector('.slider-arrow.next');
const prevBtn = document.querySelector('.slider-arrow.prev');

if (slider && slides.length) {
  let currentIndex = 0;

  const updateSlider = (index) => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === index);
    });
  };

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
  });

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
  }, 5200);
}

const projectSlider = document.querySelector('[data-project-slider]');
const projectTrack = document.querySelector('.project-track');
const projectCards = Array.from(document.querySelectorAll('.project-card'));
const projectNext = document.querySelector('.project-arrow.next');
const projectPrev = document.querySelector('.project-arrow.prev');

if (projectSlider && projectTrack && projectCards.length) {
  let projectIndex = 0;

  const updateProjects = () => {
    const cardWidth = projectCards[0].getBoundingClientRect().width + 24;
    projectTrack.style.transform = `translateX(-${projectIndex * cardWidth}px)`;
  };

  projectNext?.addEventListener('click', () => {
    const visibleCards = window.innerWidth <= 680 ? 1 : window.innerWidth <= 980 ? 2 : 3;
    projectIndex = (projectIndex + 1) % Math.max(1, projectCards.length - visibleCards + 1);
    updateProjects();
  });

  projectPrev?.addEventListener('click', () => {
    const visibleCards = window.innerWidth <= 680 ? 1 : window.innerWidth <= 980 ? 2 : 3;
    projectIndex = (projectIndex - 1 + Math.max(1, projectCards.length - visibleCards + 1)) % Math.max(1, projectCards.length - visibleCards + 1);
    updateProjects();
  });

  window.addEventListener('resize', updateProjects);
  updateProjects();
}

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const topActions = document.querySelector('.top-actions');

if (menuToggle && mainNav && topActions) {
  const toggleMenu = () => {
    const shouldShow = mainNav.style.display !== 'flex';
    mainNav.style.display = shouldShow ? 'flex' : 'none';
    topActions.style.display = shouldShow ? 'flex' : 'none';
    mainNav.style.position = shouldShow ? 'absolute' : 'static';
    mainNav.style.top = shouldShow ? '76px' : 'auto';
    mainNav.style.left = shouldShow ? '1rem' : 'auto';
    mainNav.style.right = shouldShow ? '1rem' : 'auto';
    mainNav.style.flexDirection = 'column';
    mainNav.style.alignItems = 'flex-start';
    mainNav.style.padding = shouldShow ? '1rem' : '0';
    mainNav.style.background = shouldShow ? '#11151c' : 'transparent';
    mainNav.style.borderRadius = shouldShow ? '18px' : '0';
    mainNav.style.border = shouldShow ? '1px solid rgba(255,255,255,0.08)' : 'none';
    topActions.style.position = shouldShow ? 'absolute' : 'static';
    topActions.style.top = shouldShow ? '200px' : 'auto';
    topActions.style.left = shouldShow ? '1rem' : 'auto';
    topActions.style.right = shouldShow ? '1rem' : 'auto';
    topActions.style.justifyContent = 'flex-start';
    topActions.style.padding = shouldShow ? '0 0 1rem' : '0';
  };

  menuToggle.addEventListener('click', toggleMenu);
}
