function xyswap() {
    let x = document.getElementsByClassName("item-x")[0];
    let y = document.getElementsByClassName("item-y")[0];

    if (!x || !y) {
        swapButton.style.backgroundColor = 'orange';
        swapButton.style.color = 'black';
    }
    else {
        swapButton.style.backgroundColor = 'black';
        swapButton.style.color = 'white';

        const xparent = x.parentNode;
        const yparent = y.parentNode;
        const xnext = x.nextSibling;
        const ynext = y.nextSibling;
    
        const width = document.documentElement.clientWidth;
        isSwapped = !isSwapped;
        if (isSwapped) {
            x.style.paddingLeft = 0;
            x.style.alignItems = "center";
            y.style.justifyContent = "flex-start";
     
            if (width >= 1025) {
                y.style.paddingLeft = `3.5vw`;
            }
            else if (449 <= width && width <= 1024) {
                y.style.paddingLeft = `5vw`;
            }
            else if (width <= 448) {
                y.style.paddingLeft = `5vw`;
    
            }
        }
        else {
            y.style.paddingLeft = 0;
            x.style.alignItems = "flex-start";
            y.style.justifyContent = "center";
    
            if (width >= 1025) {
                x.style.paddingLeft = `3.5vw`;
            }
            else if (449 <= width && width <= 1024) {
                x.style.paddingLeft = `5vw`;
            }
            else if (width <= 448) {
                x.style.paddingLeft = `5vw`;
    
            }
        }
    
        if (xparent && yparent) {
            yparent.insertBefore(x, ynext);
            xparent.insertBefore(y, xnext);
        }
    }
}
let isSwapped = false;
const swapButton = document.getElementById('swap');
if (!swapButton) {
    alert('Swap button is not found!');
}
else {
    swapButton.addEventListener('click', xyswap);
}