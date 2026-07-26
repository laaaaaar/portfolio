let colors = ["#ffffff", "#ffffff", "#ffffff", "#e9e2a1", "#e591d3"];
let stars = [];
let pageHeight = document.body.scrollHeight;

for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    star.style.top = Math.floor(Math.random() * pageHeight) + "px";

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.backgroundColor = randomColor;

    document.body.appendChild(star);
    stars.push(star);
}

function flickerStars() {
    let flickerCount = Math.floor(stars.length * 0.5);
    for (let n = 0; n < flickerCount; n++) {
        let randomStar = stars[Math.floor(Math.random() * stars.length)];
        let randomOpacity = (Math.random() * 0.9 + 0.1).toFixed(2);
        let randomScale = (Math.random() * 0.4 + 1).toFixed(2);
        randomStar.style.opacity = randomOpacity;
        randomStar.style.transform = `scale(${randomScale})`;
    }
}

setInterval(flickerStars, 2000);

function spawnShootingstar() {
    let shootingStar = document.createElement("div");
    shootingStar.classList.add("shooting-star");
    shootingStar.style.left = Math.random() * window.innerWidth + "px";
    shootingStar.style.top = Math.random() * (document.body.scrollHeight / 2) + "px";
    shootingStar.style.animation = "shoot 1.5s ease-out forwards";

    document.body.appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 1500);
}

setInterval(spawnShootingstar, 5000);