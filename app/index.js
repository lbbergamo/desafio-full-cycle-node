const express = require('express')
const app = express()
const port = process.env.SERVER_PORT

const config = {
    host:  process.env.DATABASE_HOST,
    user:  process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)
const name = ["Joao", "Pedrinho", "José", "Lucas" ].map(name => `('${name}')`)

const sqlInsert = `INSERT INTO people(name) VALUES ${name.toString()}`
connection.query(sqlInsert)

const sqlQuery = `SELECT id, name FROM people`

let saveResult = ""

connection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    else {
        const data = Object.values(JSON.parse(JSON.stringify(result)));
        data.forEach(element => {
            saveResult+=`<p>${element.name}</p>\n`            
        });
    }
})

app.get('/', (req, res) => {
    const response = `<h1>Full Cycle Rocks!</h1>\n${saveResult}`
    res.send(response)
})

app.listen(port, () => {
    console.log('Run in port ' + port)
})