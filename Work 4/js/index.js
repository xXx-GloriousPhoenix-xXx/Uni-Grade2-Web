function DisplayMenu() 
{
    if (menu.style.transform === "rotate(0deg)") 
    {
        menu.style.transform = "rotate(90deg)";
        tooltip.style.display = "flex";
    }
    else 
    {
        menu.style.transform = "rotate(0deg)";
        tooltip.style.display = "none";
    }
}

const menu = document.getElementById("profile-menu");
menu.addEventListener("click", DisplayMenu);
const tooltip = document.getElementById("tooltip");