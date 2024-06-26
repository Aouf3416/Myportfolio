document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.querySelector('.profile-pic');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    // Toggle theme functionality
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
    });

    // Profile picture lightbox functionality
    profilePic.addEventListener('click', function() {
        const imgSrc = this.getAttribute('src');
        const lightboxImg = document.createElement('img');
        lightboxImg.src = imgSrc;
        lightboxImg.className = 'lightbox-img';
        lightbox.appendChild(lightboxImg);
        lightbox.style.display = 'flex';

        lightbox.addEventListener('click', function() {
            lightbox.style.display = 'none';
            lightbox.removeChild(lightboxImg);
        });
    });
});
