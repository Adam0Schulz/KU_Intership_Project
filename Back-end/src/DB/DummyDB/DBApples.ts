import mysql from "mysql2/promise"
import { populateTable } from "./populateDB";
import conn from "./conn";


// Function to create the "apples" table
export async function createDummyAppleTable() {
    try {
        const [rows, fields] = await (await conn).execute(`
        CREATE TABLE IF NOT EXISTS apple (
          id INT AUTO_INCREMENT PRIMARY KEY,
          danish_name VARCHAR(255),
          latin_name VARCHAR(255),
          description VARCHAR(255),
          description2 VARCHAR(255),
          description3 VARCHAR(255),
          color VARCHAR(255),
          shape VARCHAR(255)
        )
      `);
        //console.log("Apples table created");
    } catch (error) {
        console.error("Error creating Apple table:", error);
    }
}


export const populateAppleTable = () => {
    populateTable(
        conn,
        "apple",
        [
            {
                danish_name: "Granny Smith",
                latin_name: "Malus domestica 'Granny Smith'",
                description: "Crisp and tart green apple",
                description2: "Popular for baking",
                description3: "Originated in Australia",
                color: "Green",
                shape: "Round",
            },
            {
                danish_name: "Red Delicious",
                latin_name: "Malus domestica 'Red Delicious'",
                description: "Sweet and mildly flavored apple",
                description2: "Bright red skin",
                description3: "Common apple variety",
                color: "Red",
                shape: "Oval",
            },
            {
                danish_name: "Fuji",
                latin_name: "Malus domestica 'Fuji'",
                description: "Sweet and crisp apple",
                description2: "Originally from Japan",
                description3: "Yellow-green with red stripes",
                color: "Yellow-green",
                shape: "Round",
            },
            {
                danish_name: "Honeycrisp",
                latin_name: "Malus domestica 'Honeycrisp'",
                description: "Sweet and juicy apple",
                description2: "Known for its crunchy texture",
                description3: "Developed in Minnesota, USA",
                color: "Light red with yellow specks",
                shape: "Irregular",
            },
            {
                danish_name: "Gala",
                latin_name: "Malus domestica 'Gala'",
                description: "Sweet and aromatic apple",
                description2: "Commonly used in salads",
                description3: "Originated in New Zealand",
                color: "Red and yellow stripes",
                shape: "Round",
            },
        ]
    )
}