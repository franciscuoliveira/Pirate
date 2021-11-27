
//iniciar servidor
const express = require("express");
const app = express();

//creating a route
app.get("/", (req, res) => {
  res.send("home page")
})

app.listen(5000, () => {
  console.log("server started on port 5000")
} )


//start my sql
const mysql = require("mysql");

const dbase = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:'',
  database:"pirate-treasure",
});

dbase.connect( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("Database Connected!");
  }
});

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