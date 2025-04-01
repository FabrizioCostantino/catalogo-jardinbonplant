document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById("tabla-plantas");
            data.forEach(planta => {
                const fila = document.createElement("tr");

                // Usamos el id de la planta para la imagen
                const imagen = `images/${planta.id}.jpg`;  // Usamos el id directamente para el nombre del archivo
                const enlaceImagen = `images/${planta.id}.jpg`;  // Usamos el id para el enlace a la imagen en grande
                
                // Si la imagen no existe, usamos la imagen predeterminada
                const imagenExistente = new Image();
                imagenExistente.src = imagen;
                imagenExistente.onload = () => {
                    // Solo si la imagen carga correctamente, la mostramos
                    fila.innerHTML = `
                        <td class="nombre">${planta.nombre}</td>
                        <td class="cientifico">${planta.cientifico}</td>
                        <td class="genero">${planta.genero}</td>
                        <td class="familia">${planta.familia}</td>
                        <td class="maceta">${planta.maceta}</td>
                        <td class="numero">${planta.numero}</td>
                        <td class="color">${planta.color}</td>
                        <td class="precio">${planta.precio}</td>
                        <td class="imagen">
                            <a href="${enlaceImagen}" target="_blank"></a>
                        </td>
                    `;
                    // Asignamos la imagen como fondo de la celda
                    const imagenElemento = fila.querySelector("td.imagen");
                    imagenElemento.style.backgroundImage = `url(${imagen})`;
                    tabla.appendChild(fila);
                };

                // Si la imagen no existe, usamos la imagen predeterminada
                imagenExistente.onerror = () => {
                    fila.innerHTML = `
                        <td class="nombre">${planta.nombre}</td>
                        <td class="cientifico">${planta.cientifico}</td>
                        <td class="genero">${planta.genero}</td>
                        <td class="familia">${planta.familia}</td>
                        <td class="maceta">${planta.maceta}</td>
                        <td class="numero">${planta.numero}</td>
                        <td class="color">${planta.color}</td>
                        <td class="precio">${planta.precio}</td>
                        <td class="imagen">
                            <a href="sin_imagen.jpg" target="_blank"></a>
                        </td>
                    `;
                    // Asignamos la imagen predeterminada como fondo de la celda
                    const imagenElemento = fila.querySelector("td.imagen");
                    imagenElemento.style.backgroundImage = `url('images/sin_imagen.jpg')`;
                    tabla.appendChild(fila);
                };
            });
        })
        .catch(error => console.error("Error al cargar los datos:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("table");
    const headers = table.querySelectorAll("th");
    const tbody = table.querySelector("tbody");

    headers.forEach((header, index) => {
        header.addEventListener("click", () => {
            const rows = Array.from(tbody.querySelectorAll("tr"));
            const isAscending = header.dataset.order === "asc";
            const direction = isAscending ? -1 : 1;

            header.dataset.order = isAscending ? "desc" : "asc";

            rows.sort((rowA, rowB) => {
                const cellA = rowA.children[index].textContent.trim();
                const cellB = rowB.children[index].textContent.trim();
                
                return isNaN(cellA) || isNaN(cellB) 
                    ? cellA.localeCompare(cellB) * direction 
                    : (parseFloat(cellA) - parseFloat(cellB)) * direction;
            });

            rows.forEach(row => tbody.appendChild(row));
        });
    });
});
