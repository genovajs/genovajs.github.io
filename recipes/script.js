// Dynamic Recipe Cards Generator
document.addEventListener('DOMContentLoaded', () => {
  const recipesGrid = document.querySelector('.recipes-grid');
  const NUMBER_OF_IMAGES = 3; // Update this number when you add more images
  const IMAGE_EXTENSION = 'jpg'; // Change to 'png', 'webp', etc. if needed
  
  // Clear existing cards
  recipesGrid.innerHTML = '';
  
  // Generate recipe cards for each numbered image
  for (let i = 0; i < NUMBER_OF_IMAGES; i++) {
    const card = document.createElement('article');
    card.className = 'recipe-card';
    
    const img = document.createElement('img');
    img.src = `images/${i}.${IMAGE_EXTENSION}`;
    img.alt = `Recipe ${i + 1}`;
    img.loading = 'lazy';
    
    // Optional: handle missing images gracefully
    img.onerror = () => {
      card.style.display = 'none';
      console.warn(`Image not found: ${i}.${IMAGE_EXTENSION}`);
    };
    
    card.appendChild(img);
    recipesGrid.appendChild(card);
  }
  
  console.log(`Generated ${NUMBER_OF_IMAGES} recipe cards`);
});
