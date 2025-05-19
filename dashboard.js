document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.querySelector('.header');
  const menuBtn = document.querySelector('.menu');
  const navbar = document.querySelector('.navbar');
  
  // Handle scroll event
  function handleScroll() {
    if (window.scrollY > 100) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }
  
  // Toggle mobile menu
  function toggleMenu() {
    navbar.classList.toggle('show');
    menuBtn.innerHTML = navbar.classList.contains('show') ? 'close' : 'menu';
  }
  
  // Close menu when clicking on a link
  function closeMenu() {
    navbar.classList.remove('show');
    menuBtn.innerHTML = 'menu';
  }
  
  // Event listeners
  window.addEventListener('scroll', handleScroll);
  menuBtn.addEventListener('click', toggleMenu);
  
  // Close menu when clicking on nav links
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Initialize with correct header state
  handleScroll();
  
  // EmailJS form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add your EmailJS send function here
      alert('Message sent successfully!');
      this.reset();
    });
  }
});

// Dashboard specific JS (dashboard.js)
document.addEventListener('DOMContentLoaded', function() {
  // Only run if on dashboard page
  if (document.querySelector('.photo-grid')) {
    const searchBox = document.querySelector('.search-box');
    const categoryFilter = document.querySelector('.category-filter');
    const photoCards = document.querySelectorAll('.photo-card');
    
    function filterPhotos() {
      const searchTerm = searchBox.value.toLowerCase();
      const selectedCategory = categoryFilter.value.toLowerCase();
      
      photoCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const category = card.dataset.category.toLowerCase();
        const matchesSearch = title.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
        
        card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
      });
    }
    
    if (searchBox) searchBox.addEventListener('input', filterPhotos);
    if (categoryFilter) categoryFilter.addEventListener('change', filterPhotos);
    
    // Download buttons
    document.querySelectorAll('.download-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const imgSrc = this.closest('.photo-card').querySelector('img').src;
        const fileName = imgSrc.split('/').pop();
        alert(`Downloading: ${fileName}\n\nNote: In a real implementation, this would trigger a download.`);
      });
    });
  }
});