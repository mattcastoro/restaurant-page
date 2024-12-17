function generateAbout() {
    const aboutContent = document.querySelector("#content");
    const title = document.createElement("div");
    aboutContent.appendChild(title);
    title.textContent = "About";

    const funny_story = document.createElement("div");
    aboutContent.appendChild(funny_story);
    funny_story.textContent = "Funny Story";
}

export { generateAbout };