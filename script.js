const facts = [
    "Viona is in charge of the user interface!",
    "Oneal is the backend who ensures smooth database operations!",
    "Nadine is the DevOps Engineer who keeps our web app running smoothly!",
    "Abel ensures the data is stored safely in the database!",
];

function showRandomFact() {
    const factElement = document.getElementById("fact");
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factElement.textContent = randomFact;
}

document.addEventListener("DOMContentLoaded", function() {
    const pinkModeToggle = document.getElementById("pinkModeToggle");
    const body = document.body;

    if (localStorage.getItem("pinkMode") === "enabled") {
        body.classList.add("pink-mode");
        pinkModeToggle.textContent = "☀️ Light Mode";
    }

    pinkModeToggle.addEventListener("click", function() {
        body.classList.toggle("pink-mode");

        if (body.classList.contains("pink-mode")) {
            localStorage.setItem("pinkMode", "enabled");
            pinkModeToggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("pinkMode", "disabled");
            pinkModeToggle.textContent = "💖 Pink Mode";
        }
    });
});

setTimeout(() => {
    document.getElementById("speechBubble").style.display = "none";
}, 3000);

document.getElementById("profileImg").addEventListener("click", () => {
    document.getElementById("speechBubble").style.display = "none";
});

$(".my-rating-4").starRating({
    totalStars: 5,
    starShape: 'rounded',
    starSize: 40,
    emptyColor: 'lightgray',
    hoverColor: 'salmon',
    activeColor: 'crimson',
    useGradient: false
});
