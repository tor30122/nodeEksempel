//Importere moduler
const express = require(`express`); // express for å kjøre server
const app = express(); // app bruker express()

// Definer port
const PORT = 8000;

// Sette ejs som view engine
app.set(`view engine`, `ejs`);

// Rute til /
app.get(`/`, (req, res) => {
    res.render(`index`);
});

// Starte server og be den lytte til PORT
app.listen(PORT, () => {
  console.log(`Serveren kjører på http://localhost:${PORT}`);
});
