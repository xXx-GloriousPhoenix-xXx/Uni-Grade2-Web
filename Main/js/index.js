async function countWorks() {
    const repoOwner = 'xXx-GloriousPhoenix-xXx';
    const repoName = 'Uni-Grade2-Web';
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const workFolders = data.filter(item => item.type === 'dir' && item.name.startsWith('Work'));
    return workFolders.length;
}  
  
function getRandomInt(min, max) {
    const intMin = Math.floor(min);
    const intMax = Math.ceil(max);
    return Math.random() * (intMax - intMin) + intMin;
}

function rotate() {
    systemRotationAngle += (1 / 32); 
    container.style.transform = `rotate(${systemRotationAngle}deg)`;

    buttons.forEach(({ element, radius }) => {
        const textAngle = -systemRotationAngle;
        element.style.transform = `translate(-50%, -50%) rotate(${textAngle}deg)`;
    });

    requestAnimationFrame(rotate);
}

async function start() {
    const worksDone = await countWorks();
    console.log(worksDone);
    
    const container = document.getElementById("circleContainer");
    const buttonCount = worksDone;
    const radius = 240;
    let systemRotationAngle = 0;
    
    const buttons = [];
    for (let i = 0; i < buttonCount; i++) {
        const angle = (i / buttonCount) * (2 * Math.PI);
        const x = radius * Math.cos(angle) + container.offsetWidth / 2;
        const y = radius * Math.sin(angle) + container.offsetHeight / 2;
    
        const button = document.createElement("button");
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    
        const size = getRandomInt(10, 16);
        button.style.width = `${size}dvh`;
        button.style.height = `${size}dvh`;
        button.style.backgroundImage = `url('Main/data/planet_${i + 1}.png')`;
        button.addEventListener("click", () => document.location.href = `https://xxx-gloriousphoenix-xxx.github.io/Uni-Grade2-Web/Work%20${i + 1}`);
    
        const span = document.createElement("span");
        span.textContent = i + 1;
    
        const buttonRotation = getRandomInt(0, 360); 
    
        buttons.push({ element: button, radius: radius, buttonRotation: buttonRotation });
        button.appendChild(span);
        container.appendChild(button);
    }

    rotate();
}

start();