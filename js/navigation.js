/**
 * Fresh Cali - Navigation System
 * Compatible con ElevenLabs Client Tools
 */

// =========================
// MAPA DE SECCIONES
// =========================

const SECTIONS = {
    inicio: "hero",
    home: "hero",
    hero: "hero",

    productos: "catalog",
    catalogo: "catalog",
    catalog: "catalog",

    verduras: "verduras",
    tuberculos: "tuberculos",
    citricos: "citricos",
    tropicales: "tropicales",
    despensa: "despensa",

    nosotros: "story",
    historia: "story",
    story: "story",

    equipo: "team",
    team: "team",

    valores: "values",
    values: "values",

    contacto: "contact-form",
    contact: "contact-form",

    faq: "faq"
};

// =========================
// FUNCIÓN GLOBAL
// =========================

function navigateToSection(destination) {

    const normalizedDestination = destination
        .toLowerCase()
        .trim();

    const targetId =
        SECTIONS[normalizedDestination] ||
        normalizedDestination;

    console.log(
        `[Fresh Cali] Navegando a: ${targetId}`
    );

    const element =
        document.getElementById(targetId);

    if (!element) {

        console.warn(
            `[Fresh Cali] Sección no encontrada: ${targetId}`
        );

        return `La sección ${destination} no existe`;
    }

    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    return `Usuario llevado a ${destination}`;
}

// =========================
// HACER GLOBAL LA FUNCIÓN
// =========================

window.navigateToSection = navigateToSection;

// =========================
// INICIALIZACIÓN
// =========================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "[Fresh Cali] Página inicializada"
        );

        const widget =
            document.querySelector(
                "elevenlabs-convai"
            );

        if (!widget) {

            console.error(
                "[Fresh Cali] Widget no encontrado"
            );

            return;
        }

        console.log(
            "[Fresh Cali] Widget encontrado"
        );

        // =========================
        // REGISTRO DE CLIENT TOOLS
        // =========================

        widget.addEventListener(
            "elevenlabs-convai:call",
            (event) => {

                console.log(
                    "[Fresh Cali] Registrando Client Tools"
                );

                event.detail.config.clientTools = {

                    scroll_to: async ({
                        section
                    }) => {

                        console.log(
                            "[Fresh Cali] Tool scroll_to:",
                            section
                        );

                        return window.navigateToSection(
                            section
                        );
                    }

                };

            }
        );

    }
);

// =========================
// DEBUGGING
// =========================

window.addEventListener(
    "message",
    (event) => {

        console.log(
            "[Fresh Cali] Message recibido:",
            event
        );

    }
);

document.addEventListener(
    "click",
    (event) => {

        console.log(
            "[Fresh Cali] Click:",
            event.target
        );

    }
);

console.log(
    "[Fresh Cali] navigation.js cargado"
);