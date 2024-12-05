//Importere moduler
const express = require(`express`); // express for å kjøre server
const app = express(); // app bruker express()
const db = require(`./db`); // Importer databasekobling

// Bruker express til å håndtere data som sendes inn
app.use(express.urlencoded({extended: true})); // For å lese og bruke data fra skjema
app.use(express.json()); // Håndtere JSON data

// Definer port
const PORT = 8000;

// Sette ejs som view engine
app.set(`view engine`, `ejs`);

// Rute til /
app.get(`/`, (req, res) => {
    res.render(`index`);
});

// Lag en rute til /nybruker
app.get(`/nybruker`, (req,res) => {
    res.render(`nybruker`);
});

app.post(`/nybruker`, (req, res) => {
    const navn = req.body.navn;
    const epost = req.body.epost;
    const telefon = req.body.telefon;

    const query = "INSERT INTO personer (navn, epost, telefon) VALUES (?, ?, ?)";
    
    db.query(query, [navn, epost, telefon], (err, result) => {
        if (err) {
            console.error("Feil ved registrering av person:", err);
            return res.status(500).send("Kunne ikk registrere personen.");
        }
        res.render(`nybruker`);
    })

})

// Starte server og be den lytte til PORT
app.listen(PORT, () => {
  console.log(`Serveren kjører på http://localhost:${PORT}`);
});
