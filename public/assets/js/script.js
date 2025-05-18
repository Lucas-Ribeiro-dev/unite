document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.gallery-image');
  const body = document.body;

  galleryImages.forEach(imageContainer => {
    const image = imageContainer.querySelector('img');

    // Adiciona o evento de clique diretamente na imagem
    image.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        const expandedImageContainer = document.createElement('div');
        expandedImageContainer.classList.add('expanded-image-container');

        const originalImageSrc = this.getAttribute('src');
        const expandedImage = document.createElement('img');
        expandedImage.setAttribute('src', originalImageSrc);

        expandedImageContainer.appendChild(expandedImage);
        body.appendChild(expandedImageContainer);

        expandedImageContainer.addEventListener('click', function() {
          body.removeChild(expandedImageContainer);
        });
      }
    });
  });

  
  const menuLinks = document.querySelectorAll('#collection-menu a');
  const items = document.querySelectorAll('.collection-item');

  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      menuLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      items.forEach(item => {
        if (filter === 'todos' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  document.querySelector('#collection-menu a[data-filter="todos"]').click();
});