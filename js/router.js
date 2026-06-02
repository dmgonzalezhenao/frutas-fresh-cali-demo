
const ROUTES = {
  "/": "./pages/home.html",
  "/products": "./pages/products.html",
  "/about": "./pages/about.html",
  "/contact": "./pages/contact.html"
};

async function loadRoute(path){
  const file = ROUTES[path] || ROUTES["/"];
  const html = await fetch(file).then(r => r.text());
  document.getElementById("app").innerHTML = html;
}

async function navigate(path){
  history.pushState({}, "", path);
  await loadRoute(path);
}

window.navigate = navigate;

document.addEventListener("click", async (e)=>{
  const link = e.target.closest("[data-route]");
  if(!link) return;
  e.preventDefault();
  await navigate(link.dataset.route);
});

window.addEventListener("popstate", ()=>loadRoute(location.pathname));
loadRoute(location.pathname);
