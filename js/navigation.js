document.addEventListener("DOMContentLoaded", () => {

    const widget = document.querySelector("elevenlabs-convai");


    console.log("setClientTools:", typeof widget.setClientTools);
    console.log("registerTool:", typeof widget.registerTool);
    console.log("clientTools:", widget.clientTools);
    if (!widget) {
        console.error("Widget de ElevenLabs no encontrado");
        return;
    }

    console.log("Widget encontrado");

    widget.clientTools = {

        navigate: async ({ page }) => {

            console.log("Tool navigate llamada");
            console.log("Página:", page);

            const routes = {
                home: "index.html",
                products: "products.html",
                about: "about.html",
                contact: "contact.html"
            };

            const destination = routes[page];

            if (destination) {
                window.location.href = destination;
                return `Navegación realizada a ${page}`;
            }

            return `Página ${page} no encontrada`;
        },

        scroll_to: async ({ section }) => {

            console.log("Tool scroll_to llamada");
            console.log("Sección:", section);

            const element = document.getElementById(section);

            if (element) {

                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                return `Scroll realizado a ${section}`;
            }

            return `Sección ${section} no encontrada`;
        }

    };

    console.log("Client Tools registradas");
    console.log(widget.clientTools);

});