function onPythonClick() {
    window.location.href = "python.html";
}
function onCClick() {
    window.location.href = "c.html";
}
function onCppClick() {
    window.location.href = "cpp.html";
}
function onCsClick() {
    window.location.href = "cs.html";
}
function onHtmlClick() {
    window.location.href = "html.html";
}
document.getElementsByClassName("goto-python")[0].addEventListener("click", onPythonClick);
document.getElementsByClassName("goto-c")[0].addEventListener("click", onCClick);
document.getElementsByClassName("goto-cpp")[0].addEventListener("click", onCppClick);
document.getElementsByClassName("goto-cs")[0].addEventListener("click", onCsClick);
document.getElementsByClassName("goto-html")[0].addEventListener("click", onHtmlClick);

function onTableMarkingClick() {
    window.location.href = "general-table.html";
}
function onGridMarkingClick() {
    window.location.href = "general-grid.html";
}
function onFlexMarkingClick() {
    window.location.href = "general-flex.html";
}
document.getElementsByClassName("goto-table-marking")[0].addEventListener("click", onTableMarkingClick);
document.getElementsByClassName("goto-grid-marking")[0].addEventListener("click", onGridMarkingClick);
document.getElementsByClassName("goto-flex-marking")[0].addEventListener("click", onFlexMarkingClick);

function onCodewarsClick() {
    window.location.href = "https://www.codewars.com/";
}
document.getElementsByClassName("goto-codewars")[0].addEventListener("click", onCodewarsClick);