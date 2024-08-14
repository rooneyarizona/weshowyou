/**
 * Comment controller API to fetch and post comment data.
 */

const db = require("../models/db");

exports.getCommentsByVideo = (req, res) => {
  const videoId = req.params.videoId;
  const sql = "SELECT * FROM comments WHERE videoId = ?";

  db.query(sql, [videoId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};
//Adds new comment data which wa entered in VideoList component and then return comments straight back to show on page
exports.addComment = (req, res) => {
  const { userName, videoId, commentText } = req.body;
  const sql =
    "INSERT INTO comments (userName, videoId, commentText, dateAdded) VALUES (?, ?, ?, NOW())";

  db.query(sql, [userName, videoId, commentText], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Returns the commments from database included post to update in realtime
    const updatedSql = "SELECT * FROM comments WHERE videoId = ?";
    db.query(updatedSql, [videoId], (err, updatedResults) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(updatedResults);
    });
  });
};

exports.getAllComments = (req, res) => {
  const commentQuery = `SELECT * FROM COMMENTS`;
  db.query(commentQuery, (err, results) => {
    if (err) {
      return res.status(500).send({ success: false, message: err.message });
    }
    res.send({ success: true, users: results });
  });
};