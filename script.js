window.onload = function () {
    setTimeout(() => {
        document.getElementById("hero").style.opacity = "1";
    }, 500);
};

function openWish() {
    document.getElementById("final").style.display = "block";
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

    // 🎉 Confetti effect
    for (let i = 0; i < 120; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = "✨";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (Math.random() * 20 + 10) + "px";
        confetti.style.animation = "fall 4s linear forwards";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}
