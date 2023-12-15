document.addEventListener("DOMContentLoaded", () => {
    const cursorTrail = document.getElementById("cursor-trail");
    const trailLength = 5;
    const trailDuration = 0;
    const cursorPositions = [];

    document.addEventListener("mousemove", (e) => {
        const cursorX = e.clientX;
        const cursorY = e.clientY;

        cursorPositions.push({ x: cursorX, y: cursorY });

        if (cursorPositions.length > trailLength) {
            cursorPositions.shift();
        }

        cursorTrail.innerHTML = "";

        for (let i = 0; i < cursorPositions.length - 1; i++) {
            const line = document.createElement("div");
            line.className = "cursor-line";
            line.style.left = `${cursorPositions[i].x}px`;
            line.style.top = `${cursorPositions[i].y}px`;
            line.style.width = `${Math.sqrt(Math.pow(cursorPositions[i + 1].x - cursorPositions[i].x, 2) + Math.pow(cursorPositions[i + 1].y - cursorPositions[i].y, 2))}px`;
            line.style.transform = `rotate(${Math.atan2(cursorPositions[i + 1].y - cursorPositions[i].y, cursorPositions[i + 1].x - cursorPositions[i].x)}rad)`;
            cursorTrail.appendChild(line);
        }

        setTimeout(() => {
            cursorTrail.innerHTML = "";
        }, trailDuration);
    });
});
