import heroImage from "./images/wraps.jpg";

function generateHome() {
    const contentHome = document.querySelector("#main");

    const titleHome = document.createElement("div");
    contentHome.appendChild(titleHome);
    titleHome.textContent = "Rafa's Wraps";
    titleHome.classList.add("title");

    const image = document.createElement("img");
    image.src = heroImage;
    contentHome.appendChild(image);
    image.classList.add("img");

    const contentBackground = document.createElement("div");
    contentHome.appendChild(contentBackground);
    contentBackground.classList.add("content");

    const headingBackground = document.createElement("div");
    contentBackground.appendChild(headingBackground);
    headingBackground.textContent = "Our Specialty";
    headingBackground.classList.add("heading");

    const bodyBackground = document.createElement("div");
    contentBackground.appendChild(bodyBackground);
    bodyBackground.textContent = "We specialize in wraps.  Any sandwich you can think of, we can wrap it.  Peanut butter and jelly, wrap it. Sardines and pickles, wrap it.  Whatever you desire, we'll wrap it for you.  It's what we do!!!";
    bodyBackground.classList.add("body")

    const contentHoursOfOp = document.createElement("div");
    contentHome.appendChild(contentHoursOfOp);
    contentHoursOfOp.classList.add("content");

    const headingHoursOfOp = document.createElement("div");
    contentHoursOfOp.appendChild(headingHoursOfOp);
    headingHoursOfOp.textContent = "Hours of Operation";
    headingHoursOfOp.classList.add("heading");

    const listHoursOfOp = document.createElement("ul");
    contentHoursOfOp.appendChild(listHoursOfOp);
    listHoursOfOp.classList.add("listContainer");

    const monday = document.createElement("li");
    listHoursOfOp.appendChild(monday);
    monday.textContent = "Monday 6am - 3pm";
    monday.classList.add("listItem");
    const tuesday = document.createElement("li");
    listHoursOfOp.appendChild(tuesday);
    tuesday.textContent = "Tuesday 6am - 3pm";
    tuesday.classList.add("listItem");
    const wednesday = document.createElement("li");
    listHoursOfOp.appendChild(wednesday);
    wednesday.textContent = "Wednesday 6am - 3pm";
    wednesday.classList.add("listItem");
    const thursday = document.createElement("li");
    listHoursOfOp.appendChild(thursday);
    thursday.textContent = "Thursday 6am - 3pm";
    thursday.classList.add("listItem");
    const friday = document.createElement("li");
    listHoursOfOp.appendChild(friday);
    friday.textContent = "Friday 6am - 6pm";
    friday.classList.add("listItem");
    const saturday = document.createElement("li");
    listHoursOfOp.appendChild(saturday);
    saturday.textContent = "Saturday 7am - 6pm";
    saturday.classList.add("listItem");
    const sunday = document.createElement("li");
    listHoursOfOp.appendChild(sunday);
    sunday.textContent = "Sunday 7am - 6pm";
    sunday.classList.add("listItem");

    const contentLocation = document.createElement("div");
    contentHome.appendChild(contentLocation);
    contentLocation.classList.add("content");

    const headingLocation = document.createElement("div");
    contentLocation.appendChild(headingLocation); 
    headingLocation.textContent = "Location";
    headingLocation.classList.add("heading");

    const bodyLocation = document.createElement("div");
    contentLocation.appendChild(bodyLocation);
    bodyLocation.textContent = "123 Any Road, Anywhere, CO";
    bodyLocation.classList.add("body");
}

export { generateHome };