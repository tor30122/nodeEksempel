// Importere mysql2 modulen
const mysql = require(`mysql2`);

// Innstillinger for kobling til server
const connection = mysql.createConnection({
    host: "localhost", // Adresse til mysql server
    port: 3306, //Port til mysql server
    user: "root", // Brukernavn på server
    password: "", // Passord på server
    database: "utstyr" // Hvilken database skal brukes?
});

// Koble til databasen
connection.connect((err) => {
    if(err) {
        console.error("Feil ved tilkobling til databasen:", err);
        return;
    }
    console.log("Koblet til databasen.")
});

// Eksportere datbasekoblingen
module.exports = connection;