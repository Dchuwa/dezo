document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically handle the login logic
    console.log('Login attempt:', { email, password });
});

// Ensure video plays on mobile devices
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('backgroundVideo');
    
    // Play video as soon as possible
    video.play().catch(function(error) {
        console.log("Video autoplay failed:", error);
    });
    
    // Handle video playback on mobile devices
    document.addEventListener('touchstart', function() {
        video.play().catch(function(error) {
            console.log("Video autoplay failed after touch:", error);
        });
    }, { once: true });
});