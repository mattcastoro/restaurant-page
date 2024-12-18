import "./styles.css";
import { generateHome } from "./home.js";
import { generateMenu } from "./menu.js";
import { generateAbout } from "./about.js";
import { setTabs } from "./setTabs.js";

generateHome();

document.addEventListener("DOMContentLoaded", function() {
    const myTabs = document.querySelectorAll(".tab");
        myTabs.forEach(function(tab) {
            tab.addEventListener("click", function(e) {

                const content = document.querySelector("#main");
                content.textContent = "";

                if (this.id === "tabHome") {
                    generateHome();
                    setTabs(e);
                } else if (this.id === "tabMenu") {
                    generateMenu();
                    setTabs(e);
                } else if (this.id === "tabAbout") {
                    generateAbout();
                    setTabs(e);
                }

            });
        });
});