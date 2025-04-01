document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById("tabla-plantas");
            data.forEach(planta => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${planta.nombre}</td>
                    <td>${planta.cientifico}</td>
                    <td>${planta.genero}</td>
                    <td>${planta.familia}</td>
                    <td>${planta.maceta}</td>
                    <td>${planta.numero}</td>
                    <td>${planta.color}</td>
                    <td>${planta.precio}</td>
                `;
                tabla.appendChild(fila);
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