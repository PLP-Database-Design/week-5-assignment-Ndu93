//import our dependence
const express = require("express");
const app = express();
const mysql = require("mysql2");
const dotenv = require("dotenv");

//cors and ejs

//configure environment variables
dotenv.config();

//create a connection object
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//test the connection
db.connect((err) => {
  //connection is not successful
  if (err) {
    return console.log("Error conecting to the database: ", err);
  }

  //connection is successful
  console.log("Connection to mySQL server is successful:", db.threadId);
});

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// GET endpoint
// question 1 retrieve all the patient records
// app.get("", (req, res) => {
//   const getPatients =
//     "SELECT patient_id, first_name, last_name, date_of_birth FROM patients";
//   db.query(getPatients, (err, data) => {
//     //if i have an error
//     if (err) {
//       return res.status(400).send("Failed to retrieve informations", err);
//     }

//     res.status(200).render("data", { data });
//     // res.status(200).send(data);
//   });
// });

// question 2 retrieve all the providers records
// app.get("", (req, res) => {
//   const getPatients =
//     "SELECT first_name, last_name, provider_specialty FROM providers";
//   db.query(getPatients, (err, data) => {
//     //if i have an error
//     if (err) {
//       return res.status(400).send("Failed to retrieve informations", err);
//     }

//     res.status(200).render("data", { data });
//     // res.status(200).send(data);
//   });
// });

// question 3 retrieve all patients records by first name
// app.get("", (req, res) => {
//   const getPatients = "SELECT * FROM patients";
//   db.query(getPatients, (err, data) => {
//     //if i have an error
//     if (err) {
//       return res.status(400).send("Failed to retrieve informations", err);
//     }

//     res.status(200).render("data", { data });
//     // res.status(200).send(data);
//   });
// });

// question 4 retrieve all PROVIDERS records by SPECIALTY
app.get("", (req, res) => {
  const getPatients = "SELECT provider_specialty FROM providers";
  db.query(getPatients, (err, data) => {
    //if i have an error
    if (err) {
      return res.status(400).send("Failed to retrieve informations", err);
    }

    res.status(200).render("data", { data });
    // res.status(200).send(data);
  });
});

// GET
// POST
//PUT
// DELETE

//basic endpoint to say hello world
app.get("", (req, res) => {
  res.send("Hello world!, Daniel makes some chaes to the code");
});

//start and listen to the server
app.listen(3500, () => {
  console.log("server is runing on port 3500");
});
