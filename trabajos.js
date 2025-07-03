const trabajos = [
    {
        titulo: "Estructura para galpón industrial",
        descripcion: "Fabricación e instalación de estructura metálica para galpón de 500m².",
        imagen: "https://via.placeholder.com/300x200?text=Galpon"
    },
    {
        titulo: "Rejas personalizadas",
        descripcion: "Diseño y fabricación de rejas de seguridad para viviendas.",
        imagen: "https://via.placeholder.com/300x200?text=Rejas"
    },
    {
        titulo: "Escalera metálica",
        descripcion: "Escalera metálica para acceso a planta alta en empresa local.",
        imagen: "https://via.placeholder.com/300x200?text=Escalera"
    }
];

function mostrarTrabajos() {
    const contenedor = document.getElementById("lista-trabajos");
    trabajos.forEach(trabajo => {
        const div = document.createElement("div");
        div.className = "trabajo";
        div.innerHTML = `
            <img src="${trabajo.imagen}" alt="${trabajo.titulo}">
            <h3>${trabajo.titulo}</h3>
            <p>${trabajo.descripcion}</p>
        `;
        contenedor.appendChild(div);
    });
}

window.onload = mostrarTrabajos;