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
function isNatural(value) {
    const pattern = /^([1-9]\d*)$/;
    return pattern.test(value);
}
function CheckQF() {
    markAsValid(quantityField);
    let newQ = quantityField.value;
    if (!isNatural(newQ)) {
        if (newQ !== '') {
            markAsError(quantityField);
        }
        return false;
    }
    return parseInt(newQ);
}
function CheckIF() {
    markAsValid(itemField);
    let newI = itemField.value;
    if (!isNatural(newI)) {
        if (newI !== '') {
            markAsError(itemField);
        }
        return false;
    }
    return parseInt(newI);
}
function setQ() {
    const result = CheckQF();
    if (result === false) {
        return false;
    }
    const newQ = result;
    setQuantity(newQ);
    return true;
}
function setI() {
    const result = CheckIF();
    if (result === false) {
        return false;
    }
    const newI = result;
    const currQ = getQuantity();
    if (newI > currQ) {
        markAsError(itemField);
        return false;
    }
    const currC = contentField.value;
    setItem(newI, currC);
    return true;
}
function set() {
    setQ();
    setI();
    showI();
}
function showI() {
    const ifResult = CheckIF();
    if (ifResult === false) {
        return false;
    }
    const newI = ifResult;

    const qfResult = CheckQF();
    if (qfResult === false) {
        contentField.value = '';
    }
    const currQ = getQuantity();
    if (newI > currQ) {
        markAsError(itemField);
        return false;
    }
    const currC = getItem(newI);
    contentField.value = currC;
    return true;
}

const tipOverlay = document.getElementById('tip-overlay'); 
if (tipOverlay) {
    initiateTip();
    document.getElementById('tip').addEventListener('click', displayTip);
}
const quantityField = document.getElementById('item-quantity');
if (quantityField) {
    quantityField.addEventListener('change', showI);
}
const itemField = document.getElementById('item');
if (itemField) {
    itemField.addEventListener('change', showI);
}
const setButton = document.getElementById('set');
if (setButton) {
    setButton.addEventListener('click', set);
}
const showButton = document.getElementById('show');
if (showButton) {
    showButton.addEventListener('click', show);
}

const contentField = document.getElementById('item-content');
const preview = document.getElementById('preview');
const hideElements = Array.from(document.getElementsByClassName('page'));