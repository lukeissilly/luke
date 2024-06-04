const funFacts = [
    "Luke actually made this website because he loves me so much",
    "I have 18k hours in VRChat",
    "I am really really stinky",

];

document.addEventListener("DOMContentLoaded", () => {
    const funFactElement = document.getElementById("fun-fact");
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactElement.textContent = funFacts[randomIndex];
});
