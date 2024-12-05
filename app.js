//Importere moduler
const express = require(`express`); // express for å kjøre server
const app = express(); // app bruker express()

// Definer port
const PORT = 8000;

// Starte server og be den lytte til PORT
app.listen(PORT, () => {
    console.log(`serveren kjører på http://localhost:${PORT}`);
});