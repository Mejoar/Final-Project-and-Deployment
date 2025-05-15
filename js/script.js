document.addEventListener('DOMContentLoaded', function() {
    // Update current date and time
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);
        document.getElementById('current-time').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
    
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Search functionality
    const searchForm = document.querySelector('.search-box');
    if (searchForm) {
        const searchInput = searchForm.querySelector('input');
        const searchButton = searchForm.querySelector('button');
        
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (searchInput.value.trim()) {
                alert('Searching for: ' + searchInput.value);
                // In a real implementation, this would redirect to search results
                // window.location.href = '/search?q=' + encodeURIComponent(searchInput.value);
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchButton.click();
            }
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]');
            if (email.value) {
                alert('Thank you for subscribing to our newsletter!');
                email.value = '';
            }
        });
    }
    
    // Load more button
    const loadMoreBtn = document.querySelector('.load-more button');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulate loading more news
            const newsGrid = document.querySelector('.news-grid');
            const newItems = `
                <article class="news-card">
                    <img src="https://via.placeholder.com/400x225" alt="News Image">
                    <div class="news-content">
                        <span class="category world">World</span>
                        <h3><a href="#">UN calls for urgent action on global food crisis</a></h3>
                        <p>The United Nations has warned that millions could face starvation without immediate intervention...</p>
                        <div class="meta">
                            <span><i class="far fa-user"></i> Maria Gonzalez</span>
                            <span><i class="far fa-clock"></i> 16 hours ago</span>
                        </div>
                    </div>
                </article>
                <article class="news-card">
                    <img src="https://via.placeholder.com/400x225" alt="News Image">
                    <div class="news-content">
                        <span class="category tech">Technology</span>
                        <h3><a href="#">New smartphone breaks sales records</a></h3>
                        <p>The latest flagship device has sold over 10 million units in its first weekend of availability...</p>
                        <div class="meta">
                            <span><i class="far fa-user"></i> David Kim</span>
                            <span><i class="far fa-clock"></i> 18 hours ago</span>
                        </div>
                    </div>
                </article>
            `;
            newsGrid.insertAdjacentHTML('beforeend', newItems);
            this.textContent = 'No More News to Load';
            this.disabled = true;
        });
    }
    
    // Sticky navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.main-nav');
        if (window.scrollY > 100) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const tickerItems = document.querySelectorAll('.news-ticker li');
    let currentItem = 0;
    
    // Show first item immediately
    if (tickerItems.length > 0) {
        tickerItems[0].classList.add('active');
    }
    
    // Rotate items every 5 seconds
    function rotateTicker() {
        // Hide current item
        tickerItems[currentItem].classList.remove('active');
        
        // Move to next item
        currentItem = (currentItem + 1) % tickerItems.length;
        
        // Show new item
        tickerItems[currentItem].classList.add('active');
    }
    
    // Start rotation if there are items
    if (tickerItems.length > 1) {
        setInterval(rotateTicker, 5000); // Change every 5 seconds
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize featured news carousel
    if (document.querySelector('.news-carousel-container')) {
        $('.news-carousel-container').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }
    
    // Add hover effect to news cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.news-card-img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.news-card-img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize news slider
    if (document.querySelector('.news-slider')) {
        $('.news-slider').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }
    
    // Add hover effect to slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.05)';
        });
        
        slide.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.news-carousel-track');
  const slides = Array.from(document.querySelectorAll('.news-slide'));
  const dotsContainer = document.querySelector('.carousel-dots');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  const slideCount = slides.length;
  const visibleSlides = 4;
  let currentPosition = 0;
  let autoSlideInterval;
  const slideInterval = 5000; // 5 seconds
  
  // Calculate slide width including margin
  const slideWidth = slides[0].getBoundingClientRect().width + 20;
  
  // Create dots - one per slide group
  const dotCount = Math.ceil(slideCount / visibleSlides);
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlideGroup(i));
    dotsContainer.appendChild(dot);
  }
  
  const dots = document.querySelectorAll('.dot');
  
  // Set initial position
  updateCarousel();
  
  // Function to move carousel to specific position
  function updateCarousel() {
    track.style.transform = `translateX(-${currentPosition * slideWidth * visibleSlides}px)`;
    
    // Update active dot
    const activeGroup = Math.floor(currentPosition % dotCount);
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeGroup);
    });
  }
  
  // Function to go to specific slide group
  function goToSlideGroup(groupIndex) {
    currentPosition = groupIndex;
    updateCarousel();
    resetAutoSlide();
  }
  
  // Next slide function
  function nextSlide() {
    currentPosition = (currentPosition + 1) % Math.ceil(slideCount / visibleSlides);
    updateCarousel();
    resetAutoSlide();
  }
  
  // Previous slide function
  function prevSlide() {
    currentPosition = (currentPosition - 1 + Math.ceil(slideCount / visibleSlides)) % Math.ceil(slideCount / visibleSlides);
    updateCarousel();
    resetAutoSlide();
  }
  
  // Auto slide function
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, slideInterval);
  }
  
  // Reset auto slide timer
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }
  
  // Event listeners
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });
  
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });
  
  // Pause on hover
  const carouselContainer = document.querySelector('.news-carousel-container');
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
    startAutoSlide();
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
      resetAutoSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
      resetAutoSlide();
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', () => {
    const newSlideWidth = slides[0].getBoundingClientRect().width + 20;
    if (Math.abs(newSlideWidth - slideWidth) > 1) {
      updateCarousel();
    }
  });
  
  // Start auto sliding
  startAutoSlide();
});