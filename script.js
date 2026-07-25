let colors = ["#ffffff", "#ffffff", "#ffffff", "#e9e2a1", "#e591d3"];

let stars = [];

// Loop below creates 100 stars with random positions and colors, and appends them to the body of the document
for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    star.style.top = Math.floor(Math.random() * window.innerHeight) + "px";

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.backgroundColor = randomColor;

    document.body.appendChild(star);
    stars.push(star);
}

function twinkleSomeStars() {
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        if (Math.random() < 0.2) { // 20% chance to twinkle
            star.style.animation = "twinkle 3s infinite";
         } else {
            star.style.animation = ""; // none
        }
    }
}

// Call the twinkleSomeStars function every 2 seconds
setInterval(twinkleSomeStars, 2000);