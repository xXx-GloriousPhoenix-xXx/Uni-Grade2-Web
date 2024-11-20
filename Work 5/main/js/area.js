function writeArea(element) {
    const area = element.offsetWidth * element.offsetHeight;
    output.textContent = `${area}px²`;
}
const output = document.getElementById('area');
const ids = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'github', 'author'];
ids.forEach(id => {
    const element = document.getElementById(id);
    if (!element) {
        output.style.backgroundColor = 'orange';
        output.style.color = 'black';
        return;
    }
    else {
        element.addEventListener('mouseover', () => writeArea(element));
    }
});