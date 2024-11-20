function makeBold() {
    element.style.fontWeight = 'bold';
    children.forEach(child => {
        child.style.fontWeight = 'bold';
    });
}
function writeToLocalStorage() {
    if (checkBox.checked) {
        localStorage.setItem('isBold', 'true');
    }
}
const element = document.getElementById('item-5');
const children = element.querySelectorAll('*');
const checkBox = document.getElementById('bold');
children.forEach(child => {
    child.addEventListener('focus', () => {
        makeBold();
        writeToLocalStorage();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const isBold = localStorage.getItem('isBold');
    if (isBold) {
        makeBold();
    }
});
