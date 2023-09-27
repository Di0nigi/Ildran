import mysql from "mysql2"
import { promises as fs } from 'fs';

const dbName= "marasmaticoV1";

const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"1481",
    database: dbName
}).promise();

//const result = await pool.query("")
//onsole.log(result)
console.log("np here");

async function  insertFile (file) {
    var strlist= file.split(".");
    var name=strlist[0];
    var type=strlist[1];
    try {
        const content = await fs.readFile(file);

        const query = 'INSERT INTO articles (name, filetype, data) VALUES (?, ?, ?)';
        
        // Assuming you have set up a connection pool correctly
        await pool.query(query, [name, type, content], (error, results) => {
            if (error) {
                console.error("Error inserting the file:", error);
                return;
            }
            console.log("File inserted!");
        });
    } catch (err) {
        console.error("Error reading the file:", err);
    }

}

async function getFile(){}


//await insertFile("D:\\dionigi\\Documents\\JVSscripts\\Marasmatico_\\copyPaste.txt");
const result = await pool.query("SELECT * FROM marasmaticov1.articles;");
//console.log(result);
await pool.query("DELETE FROM articles;");
const resul = await pool.query("SELECT * FROM marasmaticov1.articles;");
//console.log(resul);