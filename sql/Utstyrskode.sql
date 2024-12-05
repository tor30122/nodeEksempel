/* Lage database for utstyr */
CREATE SCHEMA `utstyr` ;

/* Ta i bruk databasen */
USE utstyr;

/* Lage tabeller */
CREATE TABLE utstyr (
    id INT AUTO_INCREMENT PRIMARY KEY,
    navn VARCHAR(255) NOT NULL,
    kategori VARCHAR(255),
    status ENUM('tilgjengelig', 'utlånt') DEFAULT 'tilgjengelig'
);

CREATE TABLE personer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    navn VARCHAR(255) NOT NULL,
    telefon VARCHAR(15),
    epost VARCHAR(255)
);

CREATE TABLE utlån (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utstyr_id INT NOT NULL,
    person_id INT NOT NULL,
    start_dato DATETIME NOT NULL,
    slutt_dato DATETIME,
    FOREIGN KEY (utstyr_id) REFERENCES utstyr(id),
    FOREIGN KEY (person_id) REFERENCES personer(id)
);