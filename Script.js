// =========================
// FILTROS POR CATEGORÍA
// =========================
const filtros = document.querySelectorAll(".filtros li");

filtros.forEach(filtro => {
    filtro.addEventListener("click", () => {

        const categoria = filtro.dataset.categoria;

        const producto = document.querySelector(
            `article[data-categoria="${categoria}"]`
        );

        if (producto) {
            producto.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
});

// =========================
// FONDO GALERÍA
// =========================
const fondo = document.querySelector(".fondo-galeria");

const imagenes = [
    "Fondos/Fondo-1.jpg",
    "Fondos/Fondo-2.jpg",
    "Fondos/Fondo-3.jpg",
    "Fondos/Fondo-4.jpg"
];

let indice = 0;

// imagen inicial
fondo.style.backgroundImage = `url(${imagenes[indice]})`;

setInterval(() => {
    fondo.style.opacity = 0;

    setTimeout(() => {
        indice = (indice + 1) % imagenes.length;
        fondo.style.backgroundImage = `url(${imagenes[indice]})`;
        fondo.style.opacity = 1;
    }, 1000);

}, 7000);

