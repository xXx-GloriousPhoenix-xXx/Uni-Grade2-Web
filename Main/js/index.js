function getRandomInt(min, max) {
    const intMin = Math.floor(min);
    const intMax = Math.ceil(max);
    return Math.random() * (max - min) + min;
}

function animate() {
    rotationAngle += (1 / 16); 
    container.style.transform = `rotate(${rotationAngle}deg)`;

    buttons.forEach(({ element, radius }) => {
        const textAngle = -rotationAngle;
        element.style.transform = `translate(-50%, -50%) rotate(${textAngle}deg)`;
    });

    requestAnimationFrame(animate);
}

const container = document.getElementById("circleContainer");
const buttonCount = 7;
const radius = 240;
let rotationAngle = 0;

const buttons = [];
for (let i = 0; i < buttonCount; i++) {
    const angle = (i / buttonCount) * (2 * Math.PI);
    const x = radius * Math.cos(angle) + container.offsetWidth / 2;
    const y = radius * Math.sin(angle) + container.offsetHeight / 2;

    const button = document.createElement("button");
    button.textContent = i + 1;
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    const size = getRandomInt(4, 8);
    button.style.width = `${size}vw`;
    button.style.height = `${size}vw`;
    button.style.backgroundImage = `url('Main/data/planet_${i + 1}.png')`;

    buttons.push({ element: button, radius: radius, angle: angle });
    container.appendChild(button); 
}

animate();