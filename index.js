// Add a check for touch events
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Event listener that works for both click and touch
document.addEventListener(isTouchDevice ? 'touchstart' : 'click', function(e) {
    // Prevent this from firing on specific elements where we don't want to start background music
    if (e.target.closest('audio') || e.target.closest('button')) {
        return;
    }
    
    const backgroundMusic = document.getElementById('background-music');
    // Only play if it's currently paused
    if (backgroundMusic && backgroundMusic.paused) {
        backgroundMusic.play().catch(function(error) {
            console.log('Autoplay was prevented:', error);
        });
    }
});

// Set up the main music controls
const mainMusic = document.getElementById('mainMusic');
const backgroundMusic = document.getElementById('background-music');

if (mainMusic && backgroundMusic) {
    mainMusic.addEventListener('play', () => {
        console.log('clicked on button!!');
        backgroundMusic.pause();
    });
    
    mainMusic.addEventListener('pause', () => {
        console.log('clicked on pause button!!');
        backgroundMusic.play().catch(function(error) {
            console.log('Background music play prevented:', error);
        });
    });
}

// Improve the toggle function
const toggle = () => {
    console.log("Toggle image visibility");
    const seeleElement = document.getElementById("Seele");
    if (seeleElement) {
        seeleElement.classList.toggle("hidden");
    }
}

/*
setInterval(() => {
    document.getElementById("Seele").classList.toggle("hidden");
  }, 2000);*/

function fadeOutBackground() {
    let vol = bgMusic.volume;
    const interval = setInterval(() => {
        vol -= 0.01;
        if (vol <= 0) {
            bgMusic.volume = 0;
            clearInterval(interval);
        } else {
            bgMusic.volume = vol;
        }
    }, 50);
}

// Improve bubble creation for better mobile performance
function createBubble() {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");

    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.top = `${Math.random() * 100}vh`;

    // Smaller bubbles on mobile for better performance
    const isMobile = window.innerWidth <= 768;
    let size = isMobile ? Math.random() * 20 + 10 : Math.random() * 30 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Longer animation duration on mobile for better performance
    const duration = isMobile ? Math.random() * 7 + 5 : Math.random() * 5 + 5;
    bubble.style.animationDuration = `${duration}s`;

    return bubble;
}

// Reduce number of bubbles on mobile
function createBubbles(num) {
    const isMobile = window.innerWidth <= 768;
    const actualNum = isMobile ? Math.min(num, 25) : num; // Fewer bubbles on mobile
    
    const container = document.querySelector(".bubble-container");
    if (container) {
        // Clear existing bubbles
        container.innerHTML = '';
        
        for (let i = 0; i < actualNum; i++) {
            let bubble = createBubble();
            container.appendChild(bubble);
        }
    }
}

// Call bubble creation on load and resize
window.addEventListener('load', () => createBubbles(50));
window.addEventListener('resize', () => createBubbles(50));

// Handle modal for the lore
const modal = document.getElementById("lore-modal");
const btn = document.getElementById("lore-btn");
const close = document.querySelector(".close-btn");

if (btn && modal && close) {
    btn.onclick = () => {
        modal.style.display = "block";
    };

    close.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    };
}

// Add a handler for the play/pause buttons
const playPauseButton = document.querySelector('.play-pause');
if (playPauseButton && mainMusic) {
    playPauseButton.addEventListener('click', () => {
        if (mainMusic.paused) {
            mainMusic.play();
        } else {
            mainMusic.pause();
        }
    });
}

// Make the bubbles react to scroll on mobile
if (isTouchDevice) {
    window.addEventListener('scroll', () => {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(bubble => {
            const speed = Math.random() * 2 - 1;
            bubble.style.transform = `translateY(${window.scrollY * speed}px)`;
        });
    });
}



