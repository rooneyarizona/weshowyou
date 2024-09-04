const bcrypt = require("bcrypt");
const db = require("../models/db");

/**]
 * User API controller to put and fetch data from users database.
 */

exports.registerUser = async (req, res) => {
  const {
    firstName,
    lastName,
    userName,
    password,
    dateOfBirth,
    dateJoined,
    eMailAddress,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO users (firstName, lastName, userName, password, dateOfBirth, dateJoined, eMailAddress) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(
      sql,
      [
        firstName,
        lastName,
        userName,
        hashedPassword,
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
  } catch (err) {
    console.error("Error hashing password", err);
    return res.status(500).send({ message: "Server error" });
  }
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

exports.loginUser = (req, res) => {
  const { userName, password } = req.body;

  const sql = "SELECT * FROM users WHERE userName = ?";
  db.query(sql, [userName], async (err, results) => {
    if (err) {
      return res.status(500).send({ success: false, message: err.message });
    }

    if (results.length === 0) {
      return res
        .status(400)
        .send({ success: false, message: "User not found" });
    }

    const user = results[0];

    // Compare the password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(400)
        .send({ success: false, message: "Incorrect password" });
    }

    res.send({
      success: true,
      message: "Login successful",
      userName: user.userName,
    });
  });
};
