document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Hero Section
    const heroSection = document.createElement('section');
    heroSection.className = 'hero';
    heroSection.innerHTML = `
        <h1>WELCOME TO THE BEST RESTAURANT</h1>
        <p>Enjoy the best dishes in town!</p>
         `;
    app.appendChild(heroSection);

    // Menu Section
    const menuSection = document.createElement('section');
    menuSection.className = 'menu';
    menuSection.innerHTML = `
        <h2>Our Menu</h2>
        <div class="menu-items">
            <img src="Screenshot 2022-07-20 at 22-56-23 Responsive website food.png">
            <img src="Screenshot 2022-07-20 at 22-58-58 Responsive website food.png">
            <img src="Screenshot 2022-07-20 at 22-56-44 Responsive website food.png">

        </div>
    `;
    app.appendChild(menuSection);

    // Gallery Section
    const gallerySection = document.createElement('section');
    gallerySection.className = 'gallery';
    gallerySection.innerHTML = `
        <h2>Gallery</h2>
        <div class="gallery-items">
            <img src="assets/img/menu-item1.jpg" alt="Gallery Image 1">
            <img src="assets/img/menu-item2.jpg" alt="Gallery Image 2">
            <img src="assets/img/logo.png" alt="Logo">
        </div>
    `;
    app.appendChild(gallerySection);
});

