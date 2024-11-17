function positionButtons() {
    const width = document.documentElement.offsetWidth;
    let divider = 1;
    if (width >= 1366) 
    {
        divider = 2;
    }
    else 
    {
        if (769 <= width && width <= 1365) {
            divider = 2.8;
        }
        else 
        {
            if (449 <= width && width <= 768) 
            {
                divider = 3;
            }
            else (width <= 448) 
            {
                divider = 1.9;
            }
        }
    }
    console.log(divider);
    console.log(container.offsetWidth);

    const radius = Math.min(container.offsetHeight, container.offsetWidth) / divider;

    buttons.forEach(({ element, buttonRotation }, index) => {
        const angle = (index / buttons.length) * (2 * Math.PI);
        const x = radius * Math.cos(angle) + container.offsetWidth / 2;
        const y = radius * Math.sin(angle) + container.offsetHeight / 2;

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.transform = `translate(-50%, -50%) rotate(${buttonRotation}deg)`;
    });
}
function resizeButtons () {
    buttons.forEach(({element}) => {
        let size = getSize();
        element.style.width = `${size}dvh`;
        element.style.height = `${size}dvh`;
    });
}
function getSize() {
    const width = document.documentElement.offsetWidth;
    let size = 0;
    if (width >= 1366) 
    {
        size = getRandomInt(12, 16);
    }
    else 
    {
        if (769 <= width && width <= 1365) {
            size = getRandomInt(10, 14);
        }
        else 
        {
            if (449 <= width && width <= 768) 
            {
                size = getRandomInt(8, 12);
            }
            else (width <= 448) 
            {
                size = getRandomInt(4, 8);
            }
        }
    }
    return size;
}
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
    const angleDifference = 1 / 32;
    systemRotationAngle = (systemRotationAngle + angleDifference) % 360;
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

    const buttonCount = worksDone;
    const radius = Math.min(container.offsetHeight, container.offsetWidth) / 2;

    for (let i = 0; i < buttonCount; i++) {
        const angle = (i / buttonCount) * (2 * Math.PI);
        const x = radius * Math.cos(angle) + container.offsetWidth / 2;
        const y = radius * Math.sin(angle) + container.offsetHeight / 2;

        const button = document.createElement("button");
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;

        button.style.backgroundImage = `url('Main/data/planet_${i + 1}.png')`;
        button.addEventListener("click", () => {
            document.location.href = `https://xxx-gloriousphoenix-xxx.github.io/Uni-Grade2-Web/Work%20${i + 1}`;
        });

        button.textContent = i + 1;

        const buttonRotation = getRandomInt(0, 360);

        buttons.push({ element: button, buttonRotation: buttonRotation });
        container.appendChild(button);
    }

    window.addEventListener("resize", positionButtons);
    window.addEventListener("resize", resizeButtons);

    resizeButtons();  
    positionButtons();
    rotate();
}

const buttons = [];
let systemRotationAngle = 0;
const container = document.getElementById("container");

start();
