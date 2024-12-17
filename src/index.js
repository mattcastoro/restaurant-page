import "./styles.css";
import { generateHome } from "./home.js";
import { generateMenu } from "./menu.js";
import { generateAbout } from "./about.js";

generateHome();

document.addEventListener("DOMContentLoaded", function() {
    const myTabs = document.querySelectorAll(".tab");
        myTabs.forEach(function(tab) {
            tab.addEventListener("click", function(e) {

                const content = document.querySelector("#main");
                content.textContent = "";

                if (this.id === "tabHome") {
                    generateHome();
                } else if (this.id === "tabMenu") {
                    generateMenu();
                } else if (this.id === "tabAbout") {
                    generateAbout();
                }

            });
        });
});