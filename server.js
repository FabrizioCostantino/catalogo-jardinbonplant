const express = require("express");
const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
