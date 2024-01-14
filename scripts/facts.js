const funFacts = [
    "The Queen died on my birthday in 2022.",
    "I almost drowned when I was 4.",
    "I have over 3k hours in Fortnite.",
    "I almost got stabbed when I was 11.",
    "I used to play VRChat (I was a loser).",
    "As of writing this, I am 63% through the GTA V campaign.",
    "I made a cringe fediverse instance that got 4k users in a week (it ended badly).",
    "Despite being bi, I still can't pull any bitches.",
    "I'm 168cm tall (5'5).",
    "I'm actually half maltese... yeah, that's about it.",
    "I've never had a cat before.",
    "I own pet camels.",
    "I'm in a Lazarbeam video from 2019.",

];

document.addEventListener("DOMContentLoaded", () => {
    const funFactElement = document.getElementById("fun-fact");
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactElement.textContent = funFacts[randomIndex];
});
