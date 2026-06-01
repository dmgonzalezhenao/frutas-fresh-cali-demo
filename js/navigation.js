document.addEventListener("DOMContentLoaded", () => {

    const widget = document.querySelector("elevenlabs-convai");

    if (!widget) {
        console.error("Widget no encontrado");
        return;
    }

    console.log("Widget encontrado");

    widget.addEventListener("elevenlabs-convai:call", (event) => {

        console.log("Evento elevenlabs-convai:call detectado");

        event.detail.config.clientTools = {

            navigate: async ({ page }) => {

                console.log("navigate ejecutado:", page);

                const routes = {
                    home: "index.html",
                    products: "products.html",
                    about: "about.html",
                    contact: "contact.html"
                };

                const destination = routes[page];

                if (destination) {
                    window.location.href = destination;
                }

                return "Navegación completada";
            },

            scroll_to: async ({ section }) => {

                console.log("scroll_to ejecutado:", section);

                const element = document.getElementById(section);

                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }

                return "Scroll completado";
            }

        };

        console.log("Client Tools inyectadas");

    });

});

widget.addEventListener("elevenlabs-convai:call", (event) => {
    console.log("EVENTO CALL DETECTADO", event);
});