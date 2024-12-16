function showAbout() {
    const btn = document.querySelector("#btnAbout");
    btn.addEventListener("click", () => {
        const aboutContent = document.querySelector("#content");
        aboutContent.textContent = "";
        generateAbout();
    });
}

function generateAbout() {
    const aboutContent = document.querySelector("#content");
    const title = document.createElement("div");
    aboutContent.appendChild(title);
    title.textContent = "About";

    const funny_story = document.createElement("div");
    aboutContent.appendChild(funny_story);
    funny_story.textContent = "Funny Story";
}

export { showAbout, generateAbout };