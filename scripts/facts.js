const funFacts = [
    "The Queen died on my birthday in 2022.",
    "I almost drowned when I was 4.",
    "I have over 3k hours in Fortnite.",
    "I almost got stabbed when I was 11.",
    "I used to play VRChat (I was a loser).",
    "I'm 168cm tall (5'5).",
    "I've never had a cat before.",
    "I own pet camels.",
    "I'm in a Lazarbeam video from 2019.",

];

document.addEventListener("DOMContentLoaded", () => {
    const funFactElement = document.getElementById("fun-fact");
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactElement.textContent = funFacts[randomIndex];
});
