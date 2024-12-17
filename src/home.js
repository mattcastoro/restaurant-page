function generateHome() {
    const homeContent = document.querySelector("#content");
    const title = document.createElement("div");
    homeContent.appendChild(title);
    title.textContent = "Name of Restaurant";

    const background = document.createElement("div");
    homeContent.appendChild(background);
    background.textContent = "Background";
}

export { generateHome };