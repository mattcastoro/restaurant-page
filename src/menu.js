function generateMenu() {
    const menuContent = document.querySelector("#content");
    const title = document.createElement("div");
    menuContent.appendChild(title);
    title.textContent = "Menu";

    const beverages = document.createElement("div");
    menuContent.appendChild(beverages);
    beverages.textContent = "Beverages";
}

export { generateMenu };