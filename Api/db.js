import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "22061998Natapires*",
    database: "gerenciamento"
})