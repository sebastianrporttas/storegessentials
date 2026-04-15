// =========================
// FILTROS POR CATEGORÍA
// =========================
document.querySelectorAll(".filtros li").forEach(filtro => {
    filtro.addEventListener("click", () => {

        const categoria = filtro.dataset.categoria;
        const producto = document.querySelector(`article[data-categoria="${categoria}"]`);

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
const imagenesFondo = [
    "Fondos/Fondo-1.webp",
    "Fondos/Fondo-2.webp",
    "Fondos/Fondo-3.webp",
    "Fondos/Fondo-4.webp"
];

let indice = 0;
fondo.style.backgroundImage = `url(${imagenesFondo[indice]})`;

setInterval(() => {
    fondo.style.opacity = 0;

    setTimeout(() => {
        indice = (indice + 1) % imagenesFondo.length;
        fondo.style.backgroundImage = `url(${imagenesFondo[indice]})`;
        fondo.style.opacity = 1;
    }, 1000);

}, 4000);

// =========================
// GALERÍA MODAL DE PRODUCTOS
// =========================
const modal = document.getElementById("modalGaleria");
const imagenActiva = document.getElementById("imagenActiva");
const miniaturas = document.getElementById("miniaturas");
const cerrar = document.querySelector(".cerrar");

document.querySelectorAll("article").forEach(producto => {

    producto.addEventListener("click", () => {

        const lista = producto.dataset.imagenes;
        if (!lista) return;

        const imagenes = lista.split(",").map(img => img.trim());

        // Precarga
        imagenes.forEach(src => {
            const preload = new Image();
            preload.src = src;
        });

        miniaturas.innerHTML = "";
        imagenActiva.src = imagenes[0];

        imagenes.forEach(img => {
            const mini = document.createElement("img");
            mini.src = img;
            mini.onclick = () => imagenActiva.src = img;
            miniaturas.appendChild(mini);
        });

        modal.classList.add("activo");
    });
});

cerrar.addEventListener("click", () => {
    modal.classList.remove("activo");
});

// =========================
// DROPDOWN BATOLAS
// =========================
const btn = document.querySelector(".dropdown-btn");
const lista = document.querySelector(".dropdown-lista");

btn.addEventListener("click", () => {
    lista.style.display =
        lista.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".dropdown-lista li").forEach(item => {
    item.addEventListener("click", () => {
        const id = item.dataset.target;
        const producto = document.getElementById(id);

        if (producto) {
            const offset = 60;
            const y = producto.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });

            producto.classList.add("producto-destacado");
            setTimeout(() => {
                producto.classList.remove("producto-destacado");
            }, 1500);
        }

        lista.style.display = "none";
    });
});

// =========================
// POPUP MAYORISTA — NUEVO
// =========================
const popupMayorista = document.getElementById("popupMayorista");
const cerrarPopup = document.getElementById("cerrarPopupMayorista");

// Mostrar popup al cargar la página
window.addEventListener("load", () => {
    popupMayorista.classList.remove("oculto");
});

// Cerrar con botón X
cerrarPopup.addEventListener("click", () => {
    popupMayorista.classList.add("oculto");
});

// Cerrar al hacer clic fuera del contenido
popupMayorista.addEventListener("click", (e) => {
    if (e.target === popupMayorista) {
        popupMayorista.classList.add("oculto");
    }
});
