function OnMailClick() {
    window.location.href = "mail\\index-inline.html";
}
function OnMobileClick() {
    window.location.href = "mobile\\index.html";
}

document.getElementsByClassName("mail")[0].addEventListener("click", OnMailClick);
document.getElementsByClassName("mobile")[0].addEventListener("click", OnMobileClick);