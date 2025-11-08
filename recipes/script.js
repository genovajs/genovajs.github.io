// Dynamic Recipe Cards Generator
document.addEventListener('DOMContentLoaded', async () => {
  const recipesGrid = document.querySelector('.recipes-grid');
  
  try {
    // Read all files from the images directory
    const files = await window.fs.readdir('./images');
    
    // Filter for image files
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    
    // Clear existing cards
    recipesGrid.innerHTML = '';
    
    // Generate recipe cards for each image
    imageFiles.forEach(filename => {
      // Create recipe name from filename (remove extension and format)
      const recipeName = filename
        .replace(/\.[^/.]+$/, '') // Remove extension
        .replace(/[-_]/g, ' ')     // Replace hyphens/underscores with spaces
        .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize words
      
      // Create card element
      const card = document.createElement('article');
      card.className = 'recipe-card';
      
      const img = document.createElement('img');
      img.src = `images/${filename}`;
      img.alt = recipeName;
      img.loading = 'lazy'; // Add lazy loading for performance
      
      card.appendChild(img);
      recipesGrid.appendChild(card);
    });
    
    console.log(`Generated ${imageFiles.length} recipe cards`);
    
  } catch (error) {
    console.error('Error loading recipe images:', error);
    recipesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Unable to load recipes. Please check the images folder.</p>';
  }
});
