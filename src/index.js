import "./styles.css";
import { showHome, generateHome } from "./home.js";
import { showMenu } from "./menu.js";
import { showAbout } from "./about.js";

generateHome();
showHome();
showMenu();
showAbout();
// this is where the tab switching logic will be written