function generateAbout() {
    const contentAbout = document.querySelector("#main");

    const titleAbout = document.createElement("div");
    contentAbout.appendChild(titleAbout);
    titleAbout.textContent = "It's a funny story";
    titleAbout.classList.add("title");

    const contentStory = document.createElement("div");
    contentAbout.appendChild(contentStory);
    contentStory.classList.add("content");

    const headingStory = document.createElement("div");
    contentStory.appendChild(headingStory);
    headingStory.textContent = "...the story";
    headingStory.classList.add("heading");

    const bodyStory = document.createElement("div");
    contentStory.appendChild(bodyStory);
    bodyStory.textContent = "Our family has been eating wraps for years.  Friends have always applauded our specialty, so we thought that we should take our family's receipes and try to make a profit off of them.  Here we are, 10 years later, barely making a profit, working nearly 24 hours a day to keep the shop open.  But it's all good, because we have made a bunch of new friends and we get to argue within our family and the customers all day long.  It's perfect and we wouldn't want it any other way.  Hope you enjoy our wraps!";
    bodyStory.classList.add("body")
}

export { generateAbout };