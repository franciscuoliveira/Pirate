const http = require('http');

const hostname = 'localhost';
const express = require('express')
var bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mysql = require('mysql');
const app = express()
const port = 3000;

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
  
  });