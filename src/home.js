function generateHome() {
    const contentHome = document.querySelector("#main");

    const titleHome = document.createElement("div");
    contentHome.appendChild(titleHome);
    titleHome.textContent = "Restaurant Title";
    titleHome.classList.add("title");

    const contentBackground = document.createElement("div");
    contentHome.appendChild(contentBackground);

    const headingBackground = document.createElement("div");
    contentBackground.appendChild(headingBackground);
    headingBackground.textContent = "Background Heading";
    headingBackground.classList.add("heading");

    const bodyBackground = document.createElement("div");
    contentBackground.appendChild(bodyBackground);
    bodyBackground.textContent = "Background Body";
    bodyBackground.classList.add("body")

    const contentHoursOfOp = document.createElement("div");
    contentHome.appendChild(contentHoursOfOp);

    const headingHoursOfOp = document.createElement("div");
    contentHoursOfOp.appendChild(headingHoursOfOp);
    headingHoursOfOp.textContent = "Hours of Operation Heading";
    headingHoursOfOp.classList.add("heading");

    const listHoursOfOp = document.createElement("ul");
    contentHoursOfOp.appendChild(listHoursOfOp);
    contentHoursOfOp.classList.add("listContainer");

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

    const headingLocation = document.createElement("div");
    contentLocation.appendChild(headingLocation);
    headingLocation.textContent = "Location Heading";
    headingLocation.classList.add("heading");

    const bodyLocation = document.createElement("div");
    contentLocation.appendChild(bodyLocation);
    bodyLocation.textContent = "Location Body";
    bodyLocation.classList.add("body");
}

export { generateHome };