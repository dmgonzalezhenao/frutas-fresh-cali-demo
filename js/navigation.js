document.addEventListener("DOMContentLoaded", () => {

    const widget = document.querySelector("elevenlabs-convai");

    if (!widget) {
        console.error("No se encontró el widget de ElevenLabs");
        return;
    }

    console.log("Widget encontrado");

    widget.addEventListener("call", (event) => {

        console.log("CALL RECIBIDA:");
        console.log(event);

        const { name, parameters } = event.detail;

        console.log("Tool:", name);
        console.log("Parameters:", parameters);

        // Navegación entre páginas

        if (name === "navigate") {

            const routes = {
                home: "index.html",
                products: "products.html",
                about: "about.html",
                contact: "contact.html"
            };

            const destination = routes[parameters.page];

            console.log("Destino:", destination);

            if (destination) {
                window.location.href = destination;
            }
        }

        // Scroll dentro de la página

        if (name === "scroll_to") {

            const target = document.getElementById(parameters.section);

            console.log("Sección:", parameters.section);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }

    });

});