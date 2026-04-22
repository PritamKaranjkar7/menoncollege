export async function loadComponent(path) {
  const res = await fetch(path);
  return await res.text();
}

export async function loadPage(pageName) {
  const app = document.getElementById("app");

  const navbar = await loadComponent("components/navbar/navbar.html");
  const page = await loadComponent(`pages/${pageName}/${pageName}.html`);
  const footer = await loadComponent("components/footer/footer.html");

  app.innerHTML = `
    ${navbar}
    ${page}
    ${footer}
  `;

  loadCSS(pageName);
}

function loadCSS(pageName) {
  const head = document.head;

  const files = [
    "components/navbar/navbar.css",
    "components/footer/footer.css",
    `pages/${pageName}/${pageName}.css`,
    "components/hero/hero.css",
    "components/highlights/highlights.css"
  ];

  files.forEach((file) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = file;
    head.appendChild(link);
  });
}