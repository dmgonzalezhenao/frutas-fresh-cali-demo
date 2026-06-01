
window.addEventListener("message", (event) => {
  if (event.data?.type !== "elevenlabs-agent-tool-call") return;

  const { name, parameters } = event.data.toolCall;

  if (name === "navigate") {
    const routes = {
      home: "/index.html",
      products: "/products.html",
      about: "/about.html",
      contact: "/contact.html"
    };

    const target = routes[parameters.page];
    if (target) window.location.href = target;
  }

  if (name === "scroll_to") {
    const element = document.getElementById(parameters.section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});
