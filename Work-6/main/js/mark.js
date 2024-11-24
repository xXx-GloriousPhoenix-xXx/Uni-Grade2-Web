/**
 * Marks element as error
 * @param {HTMLElement} element 
 * @returns {bool} result of marking
 */
function markAsError(element) {
    if (element === null) {
        return false;
    }
    element.style.backgroundColor = 'orange';
    element.style.color = 'black';
    return true;
}

/**
 * Marks element as valid
 * @param {HTMLElement} element 
 * @returns {bool} result of marking
 */
function markAsValid(element) {
    if (element === null) {
        return false;
    }
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
    return true;
}