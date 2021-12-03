//imports
const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const dbase = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  });

exports.register = (req, res) => {
    console.log(req.body);

    //getting the inputs from the body in register page
    const { name, email, password, passwordConfirm } = req.body;

    //starting the database
    //Cheking if email is already in use in the database
    //cheking if user put the password equally
    //send a message if wrong
    dbase.query('SELECT email FROM user WHERE email = ?', [email], async (error, results) => {
        if(error){
            console.log(error);
        }
        if(results.length > 0) {
            return res.render('register', {
                message: 'That email is already in use'
            })
        } else if( password !== passwordConfirm){
            return res.render('register', {
                message: 'The passwords do not match'
            });
        }

        //encrypt the password
        let hashedPassword = await bcrypt.hash(password, 8)
        console.log(hashedPassword);

        //insert user into database
        dbase.query('INSERT INTO user SET ?', {name: name, email: email, password: hashedPassword}, (error, results) =>{
            if(error) {
                console.log(error)
            }else {
                console.log(results)
                return res.render('register', {
                    message: 'User registered'
                });
            }
        })

    });

}