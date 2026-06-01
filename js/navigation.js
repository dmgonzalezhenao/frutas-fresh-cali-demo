document.addEventListener("DOMContentLoaded", () => {

    const widget = document.querySelector("elevenlabs-convai");

    if (!widget) {
        console.error("Widget no encontrado");
        return;
    }

    widget.addEventListener("elevenlabs-convai:call", (event) => {

        event.detail.config.clientTools = {

            scroll_to: async ({ section }) => {

                console.log("Scroll solicitado:", section);

                const element = document.getElementById(section);

                if (!element) {
                    return `La sección ${section} no existe`;
                }

                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                return `Scroll realizado a ${section}`;
            }

        };

    });

});