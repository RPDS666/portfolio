window.addEventListener('click', function () {   
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play().catch(function(error) {
      console.log('Autoplay was prevented:', error);
    });

    const mainMusic = document.getElementById('mainMusic');

    mainMusic.addEventListener('play', () => {
        console.log('clicked on button!!');
        backgroundMusic.pause();
    })
    
    mainMusic.addEventListener('pause', () => {
        console.log('clicked on pause button!!');
        backgroundMusic.play();
    })
});



const toggle = () => {
    console.log("Hello World!");
    document.getElementById("Seele").classList.toggle("hidden");
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


function createBubble() {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");


    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.top = `${Math.random() * 100}vh`;

    let size = Math.random() * 30 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;

    return bubble;
}
function createBubbles(num) {
    for (let i = 0; i < num; i++) {
        let bubble = createBubble();
        document.querySelector(".floating-container").appendChild(bubble);
    }
}

createBubbles(50);

  const modal = document.getElementById("lore-modal");
  const btn = document.getElementById("lore-btn");
  const close = document.querySelector(".close-btn");

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



