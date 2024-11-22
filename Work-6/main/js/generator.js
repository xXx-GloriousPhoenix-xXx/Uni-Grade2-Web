function displayTip() {
    if (!tipOverlay) {
        return;
    }
    if (tipOverlay.style.display === 'none') {
        tipOverlay.style.display = 'flex';
    }
    else {
        tipOverlay.style.display = 'none';
    }
}
function initiateTip() {
    const path = 'https://xXx-GloriousPhoenix-xXx.github.io/Uni-Grade2-Web/Work-6/main/txt/tip.txt';
    fetch(path)
    .then(response => {
        if (!response.ok) {
            throw new Error('File loading is failed');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('tip-text').textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
function set() {
    if (!quantityField || !currentField || !contentRow) {
        return;
    }
    markAsValid(quantityField);
    markAsValid(currentField);
    let quantity = quantityField.value;
    let localQuantity = localStorage.getItem('quantity');
    if (isNatural(quantity) || localQuantity) {
        if (isNatural(quantity)) {
            quantity = parseFloat(quantity);
            if (localQuantity) {
                localQuantity = parseFloat(localQuantity);
                if (quantity > localQuantity) {
                    for (var i = localQuantity + 1; i <= quantity; i++) {
                        localStorage.setItem(`row-${i}`, '');
                    }
                }
                else if (quantity < localQuantity) {
                    for (var i = quantity + 1; i <= localQuantity; i++) {
                        localStorage.removeItem(`row-${i}`);
                    }
                }
            }
            else {
                for (var i = 1; i <= quantity; i++) {
                    localStorage.setItem(`row-${i}`, '');
                }
            }
            localStorage.setItem('quantity', `${quantity}`);
        }
        else if (quantity !== ''){
            markAsError(quantityField);
        }
        let current = currentField.value;   
        if (isNatural(current)) {
            localQuantity = parseFloat(localStorage.getItem('quantity'));
            current = parseFloat(current);
            if (current <= localQuantity) {
                const content = contentRow.value;
                localStorage.setItem(`row-${current}`, `${content}`);
            }
        }
        else if (current !== '') {
            markAsError(currentField);
        }
    }
    else {
        markAsError(quantityField);
    }
    showContent();
}
function isNatural(value) {
    const pattern = /^([1-9]\d*)$/;
    return pattern.test(value);
}
function showContent() {
    if (!currentField || !quantityField || !contentRow) {
        return;
    }
    markAsValid(currentField);
    let current = currentField.value;
    if (current === '') {
        contentRow.value = '';
        return;
    }
    if (!isNatural(current)) {
        contentRow.value = '';
        markAsError(currentField);
        return;
    }
    if (!localStorage.getItem('quantity')) {
        contentRow.value = '';
        return;
    }
    current = parseFloat(current);
    let quantity = quantityField.value;
    if (quantity === '') {
        contentRow.value = '';
        return;
    }
    if (!isNatural(quantity)) {
        contentRow.value = '';
        markAsError(currentField);
        return;
    }
    quantity = parseFloat(quantity);
    const localQuantity = parseFloat(localStorage.getItem('quantity'));
    if (current > localQuantity && current > quantity) {
        contentRow.value = '';
        markAsError(currentField);
        return;
    }
    contentRow.value = localStorage.getItem(`row-${current}`);
}
function gen() {
    //
}

const tipOverlay = document.getElementById('tip-overlay'); 
if (tipOverlay) {
    initiateTip();
    document.getElementById('tip').addEventListener('click', displayTip);
}
const quantityField = document.getElementById('rows');
if (quantityField) {
    quantityField.addEventListener('change', showContent);
}
const currentField = document.getElementById('row');
if (currentField) {
    currentField.addEventListener('change', showContent);
}
const setButton = document.getElementById('set');
if (setButton) {
    setButton.addEventListener('click', set);
}
const genButton = document.getElementById('gen');
if (genButton) {
    genButton.addEventListener('click', gen);
}

const contentRow = document.getElementById('row-content');
const table = document.getElementById('gen-table');
const tableContainer = document.getElementById('item-2');
const hideElements = Array.from(document.getElementsByClassName('page'));