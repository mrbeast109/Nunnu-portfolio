function openPreview(element) {
    const modal = document.getElementById("videoModal");
    const previewVideo = document.getElementById("previewVideo");
    const bgVideo = document.getElementById("bgVideo");

    // Extract video source from the clicked grid item
    const videoSrc = element.querySelector("video").src;

    // Load sources into the preview and the blurred background
    previewVideo.src = videoSrc;
    bgVideo.src = videoSrc;

    // Show modal and start playing
    modal.style.display = "flex";
    previewVideo.play();
    bgVideo.play();
}

function closePreview() {
    const modal = document.getElementById("videoModal");
    const previewVideo = document.getElementById("previewVideo");
    const bgVideo = document.getElementById("bgVideo");

    // Hide modal and clear sources to stop memory usage
    modal.style.display = "none";
    previewVideo.pause();
    bgVideo.pause();
    previewVideo.src = "";
    bgVideo.src = "";
}

// Close modal when user clicks on the background (outside the video)
window.onclick = function (event) {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
        closePreview();
    }
}

function openPreview(element) {
    const modal = document.getElementById("videoModal");
    const previewVideo = document.getElementById("previewVideo");
    const bgVideo = document.getElementById("bgVideo");

    // Extract video source from the clicked grid item
    const videoSrc = element.querySelector("video").src;

    // Load sources into the preview and the blurred background
    previewVideo.src = videoSrc;
    bgVideo.src = videoSrc;

    // Show modal and start playing
    modal.style.display = "flex";
    previewVideo.play();
    bgVideo.play();
}

function closePreview() {
    const modal = document.getElementById("videoModal");
    const previewVideo = document.getElementById("previewVideo");
    const bgVideo = document.getElementById("bgVideo");

    // Hide modal and clear sources to stop memory usage
    modal.style.display = "none";
    previewVideo.pause();
    bgVideo.pause();
    previewVideo.src = "";
    bgVideo.src = "";
}

// Close modal when user clicks on the background (outside the video)
window.onclick = function (event) {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
        closePreview();
    }
}

// Reel Click Interaction
document.addEventListener('DOMContentLoaded', function () {
    const reels = document.querySelectorAll('.reel');

    reels.forEach(reel => {
        reel.addEventListener('click', function () {
            // Remove active class from all reels
            reels.forEach(r => r.classList.remove('active'));

            // Add active class to clicked reel
            this.classList.add('active');
        });
    });

    // Optional: Add keyboard navigation for accessibility
    reels.forEach(reel => {
        reel.setAttribute('tabindex', '0');
        reel.setAttribute('role', 'button');

        reel.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

const cards = document.querySelectorAll(
    '.banner-card1 img, .banner-card2 img, .banner-card3 img, .banner-card4 img, .banner-card5 img, .banner-card6 img'
);

cards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 8;   // Tilt strength
        const rotateY = ((x - centerX) / centerX) * -8;

        card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
    });
});
