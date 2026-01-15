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
window.onclick = function(event) {
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
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
        closePreview();
    }
}

// Reel Click Interaction
document.addEventListener('DOMContentLoaded', function() {
    const reels = document.querySelectorAll('.reel');
    
    reels.forEach(reel => {
        reel.addEventListener('click', function() {
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
        
        reel.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});