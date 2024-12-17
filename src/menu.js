function generateMenu() {
    const contentMenu = document.querySelector("#main");

    const titleMenu = document.createElement("div");
    contentMenu.appendChild(titleMenu);
    titleMenu.textContent = "Offerings";
    titleMenu.classList.add("title");

    const contentMains = document.createElement("div");
    contentMenu.appendChild(contentMains);
    contentMains.classList.add("content");

    const headingMains = document.createElement("div");
    contentMains.appendChild(headingMains);
    headingMains.textContent = "Mains";
    headingMains.classList.add("heading");

    const listMains = document.createElement("ul");
    contentMains.appendChild(listMains);
    listMains.classList.add("listContainer");

    const tuna = document.createElement("li");
    listMains.appendChild(tuna);
    tuna.textContent = "Tuna Fish Salad - $9";
    tuna.classList.add("listItem");
    const smokedSalmon = document.createElement("li");
    listMains.appendChild(smokedSalmon);
    smokedSalmon.textContent = "Smoked Salmon - $10";
    smokedSalmon.classList.add("listItem");
    const italian = document.createElement("li");
    listMains.appendChild(italian);
    italian.textContent = "Italian - $8";
    italian.classList.add("listItem");
    const hamCheese = document.createElement("li");
    listMains.appendChild(hamCheese);
    hamCheese.textContent = "Ham & Cheese - $8";
    hamCheese.classList.add("listItem");
    const turkey = document.createElement("li");
    listMains.appendChild(turkey);
    turkey.textContent = "Turkey & Swiss - $8";
    turkey.classList.add("listItem");
    const custom = document.createElement("li");
    listMains.appendChild(custom);
    custom.textContent = "Custom - $11";
    custom.classList.add("listItem");

    const contentSides = document.createElement("div");
    contentMenu.appendChild(contentSides);
    contentSides.classList.add("content");

    const headingSides = document.createElement("div");
    contentSides.appendChild(headingSides);
    headingSides.textContent = "Sides";
    headingSides.classList.add("heading");

    const listSides = document.createElement("ul");
    contentSides.appendChild(listSides);
    listSides.classList.add("listContainer");

    const chips = document.createElement("li");
    listSides.appendChild(chips);
    chips.textContent = "Chips - $2";
    chips.classList.add("listItem");
    const salad = document.createElement("li");
    listSides.appendChild(salad);
    salad.textContent = "Salad - $3";
    salad.classList.add("listItem");
    const pickles = document.createElement("li");
    listSides.appendChild(pickles);
    pickles.textContent = "Homemade Assorted Pickles - $2.50";
    pickles.classList.add("listItem");

    const contentDrinks = document.createElement("div");
    contentMenu.appendChild(contentDrinks);
    contentDrinks.classList.add("content");

    const headingDrinks = document.createElement("div");
    contentDrinks.appendChild(headingDrinks);
    headingDrinks.textContent = "Drinks";
    headingDrinks.classList.add("heading");

    const listDrinks = document.createElement("ul");
    contentDrinks.appendChild(listDrinks);
    listDrinks.classList.add("listContainer");

    const fountain = document.createElement("li");
    listDrinks.appendChild(fountain);
    fountain.textContent = "Fountain Soda - $1.50";
    fountain.classList.add("listItem");
    const mexican = document.createElement("li");
    listDrinks.appendChild(mexican);
    mexican.textContent = "Mexican Coke - $3";
    mexican.classList.add("listItem");
    const water = document.createElement("li");
    listDrinks.appendChild(water);
    water.textContent = "Bottled Water - $1,000";
    water.classList.add("listItem");
    const coffee = document.createElement("li");
    listDrinks.appendChild(coffee);
    coffee.textContent = "Coffee - $1";
    coffee.classList.add("listItem");
    const tea = document.createElement("li");
    listDrinks.appendChild(tea);
    tea.textContent = "Tea - $1";
    tea.classList.add("listItem");
}

export { generateMenu };