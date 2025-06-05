//Home Section
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('tvSlider');
  const noise = document.getElementById('tvNoise');
  const shutterBtn = document.querySelector('.tvturnon-btn');
  const slides = document.querySelectorAll('.tv_slide');

  let currentSlide = 0;
  let isAnimating = false;
  let slideInterval;

  async function goToSlide(index) {
    if (isAnimating) return;
    isAnimating = true;

    noise.style.opacity = '1';
    currentSlide = (index + slides.length) % slides.length;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${currentSlide * 25}%)`;

    await new Promise(resolve => setTimeout(resolve, 2000));

    noise.style.opacity = '0';

    shutterBtn.style.transform = 'translateX(-50%) scale(0.9)';
    setTimeout(() => {
      shutterBtn.style.transform = 'translateX(-50%) scale(1)';
      isAnimating = false;
    }, 300);
  }

  function startSlideShow() {
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);
  }

  shutterBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    goToSlide(currentSlide + 1);
    startSlideShow();
  });

  startSlideShow();
});

//Soul Section

document.addEventListener('DOMContentLoaded', function() {
  const soulSection = document.querySelector('.soul_section');
  const imagesToAnimate = [
    '.moon',
    '.flower-butterfly',
    '.soul_photo2',
    '.soul_photo1',
    '.soul_photo3',
    '.dragonfly',
    '.letter_soul'
  ];
  
  imagesToAnimate.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.opacity = '0';
      element.style.transition = 'opacity 2s ease-in-out';
    }
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateImagesSequentially();
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  if (soulSection) {
    observer.observe(soulSection);
  }
  
  function animateImagesSequentially() {
    imagesToAnimate.forEach((selector, index) => {
      const element = document.querySelector(selector);
      if (element) {
        setTimeout(() => {
          element.style.opacity = '1';
        }, index * 1000);
      }
    });
  }
});

//Trevel Section
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const shutterBtn = document.querySelector('.shutter-btn');
    const slides = document.querySelectorAll('.slide');
    const cameraWrapper = document.querySelector('.camera-wrapper');
    const ticket = document.querySelector('.ticket');
    const section = document.querySelector('.trevel_section');

    let currentSlide = 0;
    let isAnimating = false;

    function goToSlide(index) {
        if (isAnimating) return;

        isAnimating = true;
        currentSlide = (index + slides.length) % slides.length;
        slider.style.transform = `translateX(-${currentSlide * 25}%)`;

        shutterBtn.style.transform = 'translateX(-50%) scale(0.9)';
        setTimeout(() => {
            shutterBtn.style.transform = 'translateX(-50%) scale(1)';
            isAnimating = false;
        }, 300);
    }

    shutterBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cameraWrapper.classList.add('photo-visible');
                ticket.classList.add('photo-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (section) observer.observe(section);
});

//Activity Section
document.addEventListener('DOMContentLoaded', function() {
    const photoCollage = document.querySelector('.activity_section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    document.querySelector('.activity_photo1').classList.add('photo-visible')
                }, 500); 

                setTimeout(() => {
                    document.querySelector('.activity_photo2').classList.add('photo-visible'),
                    document.querySelector('.Letter_activity').classList.add('photo-visible')
                }, 1000); 

                setTimeout(() => {
                    document.querySelector('.activity_photo3').classList.add('photo-visible')
    
                }, 1500);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(photoCollage);
});


// Blossom Section
document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.petals-container');
  const petalCount = 15;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';

    const size = 60 + Math.random() * 20;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${Math.random() * window.innerWidth}px`;
    petal.style.animationDuration = `${3 + Math.random() * 10}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(petal);
  }

  const collage = document.querySelector('.blossom_photo_collage');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      document.querySelector('.blossom_photo1')?.classList.add('photo-visible');
      document.querySelector('.letter')?.classList.add('photo-visible');

      setTimeout(() => {
        document.querySelector('.blossom_photo2')?.classList.add('photo-visible');
      }, 500);

      setTimeout(() => {
        document.querySelector('.blossom_photo3')?.classList.add('photo-visible');
      }, 1000);

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  observer.observe(collage);
});

//Sea Section
document.addEventListener('DOMContentLoaded', () => {
    const seaSection = document.querySelector('.sea_section');
    const seaBackground = document.querySelector('.sea_background');
    const photoCollage = document.querySelector('.photo_collage');
    const arrow = document.querySelector('.arrow');
    const animatedItems = ['.sea_star', '.seahell', '.ship', '.sign'];

    if (seaSection && seaBackground) {
        const bgObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    seaBackground.classList.add('show');
                    bgObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });

        bgObserver.observe(seaSection);
    }

    if (photoCollage) {
        const photoObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        document.querySelector('.photo1')?.classList.add('photo-visible');
                    }, 500);
                    setTimeout(() => {
                        document.querySelector('.photo2')?.classList.add('photo-visible');
                    }, 1000);
                    setTimeout(() => {
                        document.querySelector('.photo3')?.classList.add('photo-visible');
                    }, 1500);
                    photoObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });

        photoObserver.observe(photoCollage);
    }

    window.addEventListener('scroll', () => {
        if (!arrow || !seaSection) return;

        const sectionTop = seaSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const visiblePart = (windowHeight - sectionTop) / windowHeight;
        const revealProgress = (visiblePart - 0.1) / 0.9;
        const clamped = Math.min(Math.max(revealProgress, 0), 1);
        const percent = clamped * 100;

        arrow.style.webkitMaskImage = `linear-gradient(to bottom, black ${percent}%, transparent ${percent}%)`;
        arrow.style.maskImage = `linear-gradient(to bottom, black ${percent}%, transparent ${percent}%)`;
    });

    if (seaSection) {
    const decorObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedItems.forEach((selector, i) => {
                    setTimeout(() => {
                        const el = document.querySelector(selector);
                        if (el) {
                            el.style.opacity = '1'; 
                        }
                    }, i * 1000);
                });
                decorObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    decorObserver.observe(seaSection);
    }
});
