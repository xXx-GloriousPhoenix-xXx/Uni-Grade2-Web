function writeArea(element) {
    const area = element.offsetWidth * element.offsetHeight;
    output.textContent = `${area}px²`;
}
const output = document.getElementById('area');
if (output) {
    const ids = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'github', 'author'];
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (!element) {
            markAsError(output);
            return;
        }
        else {
            element.addEventListener('mouseover', (event) => {
                writeArea(element);
                event.stopPropagation();
            });
            element.addEventListener('click', (event) => {
                writeArea(element);
                event.stopPropagation();
            });
        }
    });
}
