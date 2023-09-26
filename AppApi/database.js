import mysql from "mysql2"

const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"1481",
    database: "piermont"
}).promise()

const result = await pool.query("SELECT * FROM piermont.customers")
console.log(result)
console.log("np here")