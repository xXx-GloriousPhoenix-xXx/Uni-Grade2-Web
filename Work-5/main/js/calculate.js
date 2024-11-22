function calculate() {
    const inputs = Array.from(document.querySelectorAll('[id^="input-"]'));
    if (inputs.length === 0) {
        markAsError(calculateButton)
        return;
    }
    markAsValid(calculateButton);

    let values = inputs.map(input => {
        markAsValid(input);
        const value = input.value;
        if (!value) {
            return NaN;
        }
        else {
            if (!validate(value)) {
                markAsError(input);
                return NaN;
            }
            else {
                return parseFloat(value);
            }
        }
    });
    values = values.filter(value => !isNaN(value));
    if (values.length == 0) {
        alert('No numbers found!');
    }
    else {
        const min = Math.min(...values);
        const max = Math.max(...values);
        const saveCookies = confirm(`Min: ${min}\nMax: ${max}\nЗберегти в cookies?`);
        if (saveCookies) {
            setCookie('min', min, 1);
            setCookie('max', max, 1);
            alert('Data is saved. Reload the page.');
        }
    } 
}
function validate(value)  {
    const pattern = /^(0|[-]?[1-9]\d*(\.\d+)?|[-]?0(\.\d+))$/;
    return pattern.test(value);
}
function clear() {
    const inputs = Array.from(document.querySelectorAll('[id^="input-"]'));
    if (inputs.length === 0) {
        markAsError(clearButton);
        return;
    }
    markAsValid(clearButton);
    inputs.forEach(input => {
        input.value = '';
        markAsValid(input);
    });
}
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
}
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}
function checkCookies() {
    const min = getCookie("min");
    const max = getCookie("max");

    if (min && max) {
        const keepCookies = confirm(`Saved data:\nMin: ${min}\nMax: ${max}\nLeave this data?`);
        if (!keepCookies) {
            deleteCookie("min");
            deleteCookie("max");
            location.reload();
        } else {
            alert("Data is left in cookies. Reload the page.");
        }
    }
}
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
const calculateButton = document.getElementById('calculate');
if (!calculateButton) {
    alert('Calculation button is not found!');
}
else {
    calculateButton.addEventListener('click', calculate);
}
const clearButton = document.getElementById('clear');
if (!clearButton) {
    alert('Clear button is not found!');
}
else {
    clearButton.addEventListener('click', clear);
}
document.addEventListener("DOMContentLoaded", () => {
    checkCookies();
});