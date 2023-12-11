const funFacts = [
    "The Queen died on my birthday in 2022.",
    "I almost drowned when I was 4",
    "I have over 3k hours in Fortnite",
];

document.addEventListener("DOMContentLoaded", function () {
    const funFactElement = document.getElementById("fun-fact");

    const randomIndex = Math.floor(Math.random() * funFacts.length);

    funFactElement.textContent = funFacts[randomIndex];
});