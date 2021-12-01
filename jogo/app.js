
//iniciar servidor
const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({ path: './.env'})

const app = express();

//start my sql
const dbase = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password:process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

const publicDirectory = path.join(__dirname, './public');//constant from noejs that gives you access to the current directory that you are
app.use(express.static(publicDirectory));


app.set('view engine', 'hbs');

dbase.connect( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("Database Connected!");
  }
});


//creating a route
app.get("/", (req, res) => {
  //res.send("home page")
  res.render("index");
})

app.get("/register", (req, res) => {
  //res.send("home page")
  res.render("register");
})

app.listen(5000, () => {
  console.log("server started on port 5000")
} )




//

//cenas abaixo poderam ser alteradas
/*
const http = require('http');
const hostname = 'localhost';

var bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const dbase = mysql.createConnection({
  host:"localhost",
  port:"8889",
  user:"root",
  password:"root",
  database:"myAOE",
});

dbase.connect(function(err){
  if(err)throw err;
  
  console.log("Database Connected!");
  
  });*/