// controllers/authController.js
const db = require("../models/db");

exports.login = (req, res) => {
  const { userName, password } = req.body;
  const sql = "SELECT * FROM users WHERE userName = ? AND password = ?";
  
  db.query(sql, [userName, password], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length > 0) {
      res.json({ success: true, userName: results[0].userName });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  });
};
