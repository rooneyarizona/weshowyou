const db = require("../models/db");

exports.submitForm = (req, res) => {
  const { userName, eMail, comment, formType } = req.body;
  const sql =
    "INSERT INTO USERFEEDBACK (userName, eMail, comment, formType) VALUES (?, ?, ?, ?)";
  db.query(
    sql,
    [userName, eMail, comment, formType],
    (err, result) => {
      if (err) {
        console.error("Error inserting user: ", err);
        return res.status(500).send(err); // Send error to client
      }
      res.send("User registered successfully!");
    }
  );
};

exports.getFeedback = (req, res) => {
  const feedbackQuery = `SELECT * FROM USERFEEDBACK`;
  db.query(feedbackQuery, (err, results) => {
    if (err) {
      return res.status(500).send({ success: false, message: err.message });
    }
    res.send({ success: true, videos: results });
  });
};
