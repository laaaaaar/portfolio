let colors = ["#ffffff", "#ffffff", "#ffffff", "#e9e2a1", "#e591d3"];

let stars = [];

// Loop below creates 100 stars with random positions and colors, and appends them to the body of the document
for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    star.style.top = Math.floor(Math.random() * document.body.scrollHeight) + "px";

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.backgroundColor = randomColor;

    function flickerStars() {
        let flickerCount = Math.floor(stars.length * 0.5); // 50% of the stars will flicker
        for (let n = 0; n < flickerCount; n++) {
            let randomStar = stars[Math.floor(Math.random() * stars.length)];
            let randomOpacity = (Math.random() * 0.9 + 0.1).toFixed(2);
            let randomScale = (Math.random() * 0.4 + 1).toFixed(2);
            randomStar.style.opacity = randomOpacity;
            randomStar.style.transform = `scale(${randomScale})`;       
        }
    }

    setInterval(flickerStars, 2000); // Flicker every 2 seconds


    document.body.appendChild(star);
    stars.push(star);
}

function spawnShootingstar() {
    let shootingStar = document.createElement("div");
    shootingStar.classList.add("shooting-star");
    shootingStar.style.left = Math.random() * window.innerWidth + "px";
    shootingStar.style.top = Math.random() * (document.body.scrollHeight / 2) + "px"; // Spawn in the upper half of the screen
    shootingStar.style.animation = "shoot 1.5s ease-out forwards";

    document.body.appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 1500); // Remove the shooting star after the animation duration
}

setInterval(spawnShootingstar, 5000); // Spawn a shooting star every 5 seconds

