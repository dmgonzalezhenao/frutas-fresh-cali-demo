
const PAGE_ROUTES = {
  home: "/",
  products: "/products",
  about: "/about",
  contact: "/contact"
};

document.addEventListener("DOMContentLoaded", ()=>{
  const widget = document.querySelector("elevenlabs-convai");
  if(!widget) return;

  widget.addEventListener("elevenlabs-convai:call", (event)=>{
    event.detail.config.clientTools = {

      navigate: async ({page}) => {
        const route = PAGE_ROUTES[(page || "").toLowerCase()];
        if(!route){
          return {success:false, message:"Ruta inválida"};
        }

        await window.navigate(route);

        return {
          success:true,
          route
        };
      },

      scroll_to: async ({section}) => {

        const el = document.getElementById(section);

        if(!el){
          return {
            success:false,
            message:"Sección no encontrada"
          };
        }

        el.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

        return {
          success:true
        };
      }

    };
  });
});
