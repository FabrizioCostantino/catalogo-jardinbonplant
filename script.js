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
