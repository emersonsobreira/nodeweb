const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()
const port = 3000

app.use(express.static('public'))
app.engine('handlebars' , exphbs.engine())
app.set('view engine', 'handlebars')
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/users/new', (req, res) => {
    res.render('users/new')
})




app.post('/users/save', (req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    const sql = ` INSERT INTO users (nome) VALUES('${nome}')`
    conn.query(sql, function(err){
        if(err) {
            console.log(err)
        }
        res.redirect('/users/lista')
    })
}) 

app.get('/users/lista', (req, res) => { 
    conn.query('SELECT * FROM users', function(err, data){
        if(err){
            console.log(err)
        }
        const users = data
        res.render('users/lista', {users})

    })
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM users WHERE id =${id}`
    conn.query(sql, function (err, data) {
        if (err) {
            console.error(err)
        }
        const user = data[0]
        res.render('users/visualizar', { user })
    })
})



const conn = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'auladb',
    password: '1234',
}) 

conn.connect(function(err){
    if (err){
        console.log(err)
    }
    console.log('conectado ao mysql')
    app.listen(port)
    })