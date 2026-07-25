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

    if (Math.random() < 0.5) {
        let duration = (Math.random() * 3 + 2).toFixed(1);
        let delay = (Math.random() * 3).toFixed(1);
        star.style.animation = `twinkle ${duration}s infinite`;
        star.style.animationDelay = `${delay}s`;
    }


    document.body.appendChild(star);
    stars.push(star);
}

