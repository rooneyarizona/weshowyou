const db = require("../models/db");

exports.registerUser = (req, res) => {
  const {
    firstName,
    lastName,
    userName,
    password,
    dateOfBirth,
    dateJoined,
    eMailAddress,
  } = req.body;
  const sql =
    "INSERT INTO users (firstName, lastName, userName, password, dateOfBirth, dateJoined, eMailAddress) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [
      firstName,
      lastName,
      userName,
      password,
      dateOfBirth,
      dateJoined,
      eMailAddress,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting user: ", err);
        return res.status(500).send(err);
      }
      res.send("User registered successfully!");
    }
  );
};

exports.getUsers = (req, res) => {
  const userQuery = `SELECT * FROM USERS`;
  db.query(userQuery, (err, results) => {
    if (err) {
      return res.status(500).send({ success: false, message: err.message });
    }
    res.send({ success: true, users: results });
  });
};
