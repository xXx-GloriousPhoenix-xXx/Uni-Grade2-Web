function displayTip() {
    if (tipOverlay.style.display === 'none') {
        tipOverlay.style.display = 'flex';
    }
    else {
        tipOverlay.style.display = 'none';
    }
}
function set() {
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
    const localQuantity = parseFloat(localStorage.getItem('quantity'));
    if (current > localQuantity) {
        contentRow.value = '';
        markAsError(currentField);
        return;
    }
    contentRow.value = localStorage.getItem(`row-${current}`);
}
function markAsError(element) {
    element.style.backgroundColor = 'orange';
    element.style.color = 'black';
}
function markAsValid(element) {
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
}
function gen() {
    hideElements.forEach(element => {
        element.style.display = 'none';
    });

    let quantity = localStorage.getItem('quantity');
    if (!isNatural(quantity)) {
        return;
    }
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    quantity = parseFloat(quantity);
    const tbody = document.createElement('tbody');
    for(var i = 1; i <= quantity; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        const value = localStorage.getItem(`row-${i}`);

        cell.textContent = value;
        row.appendChild(cell);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    table.style.display = 'flex';
    localStorage.setItem('autoshow', 'true');
}
function autoshow() {
    const toShow = localStorage.getItem('autoshow');
    if (!toShow) {
        return;
    }
    gen();
}

const tipOverlay = document.getElementById('tip-overlay'); 
const quantityField = document.getElementById('rows');
const currentField = document.getElementById('row');
const contentRow = document.getElementById('row-content');
const table = document.getElementById('gen-table');
const hideElements = Array.from(document.getElementsByClassName('page'));

quantityField.addEventListener('change', showContent);
currentField.addEventListener('change', showContent);
document.getElementById('tip').addEventListener('click', displayTip);
document.getElementById('set').addEventListener('click', set);
document.getElementById('gen').addEventListener('click', gen);
document.addEventListener('DOMContentLoaded', autoshow);