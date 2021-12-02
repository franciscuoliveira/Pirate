
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

// Parse URL-encoded bodies ( as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.set('view engine', 'hbs');

dbase.connect( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("Database Connected!");
  }
});


//Define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


app.listen(5000, () => {
  console.log("server started on port 5000")
} )


