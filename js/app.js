import { loadPage } from "./componentLoader.js";

async function init() {
  await loadPage("home");
}

init();