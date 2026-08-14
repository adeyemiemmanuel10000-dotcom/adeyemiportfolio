// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('active');
  });
});

// Lightbox functionality for gallery images
function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgElement.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target.id === 'lightbox') {
    closeLightbox();
  }
});

// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();
