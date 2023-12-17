const handleImage = document.querySelector('.handle');
const doorImage = document.querySelector('.door');
const insideImage = document.querySelector('.inside');

let isOpen = false;
let isHandleTurning = false;

handleImage.addEventListener('click', () => {
    if (!isHandleTurning) {
        handleImage.style.transform = 'rotate(360deg)';
        isHandleTurning = true;

        setTimeout(() => {
            if (!isOpen) {
                doorImage.style.transform = 'translateX(350px)';
                handleImage.style.transform = 'translateX(350px)';
                isOpen = true;
            }
        }, 1000);
    }
});
