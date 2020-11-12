// INICIO AOS
// Menu responsive


function menuResponsive (panelBtn, panel, menuLink){
    const d = document;

    d.addEventListener("click", (e) =>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("show");
            d.querySelector(panelBtn).classList.toggle("show");
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("show")
            d.querySelector(panelBtn).classList.remove("show")
        }
    })
}

document.addEventListener("DOMContentLoaded", menuResponsive(".icono", ".nav__ul", ".nav__ul a"));

// Animacion Slider 

let slider = document.querySelector(".slider__contenedor");
let sliderIndividual = document.querySelectorAll(".contenido__slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", () => {
    width = sliderIndividual[0].clientWidth;

})

const intervaloSlide = setInterval(() => {
    slides();
}, intervalo);

const slides = () => {
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length)  {
        setTimeout(() => {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform .8s";
            contador = 1;
        }, 1500);
    }
}

// Eliminar fixed de menu 
let ubicacionPrincipal = window.pageYOffset;
window.addEventListener("scroll", () => {
    let desplazamientoActual = window.pageYOffset;
    const icono = document.querySelector(".icono");
    if(icono.classList.contains("show")){
       document.querySelector(".nav").style.top = "0px";
    }else if(ubicacionPrincipal >= desplazamientoActual){
        let hola = document.querySelector(".nav").style.top = "0px";
    }else{
        let bolas = document.querySelector(".nav").style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual;

})