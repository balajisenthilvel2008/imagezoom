const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(2) rotate(5deg)';
    image.style.boxShadow = '0 20px 40px rgba(0,255,255,1)';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1) rotate(0deg)';
    image.style.boxShadow = '';
  });
});