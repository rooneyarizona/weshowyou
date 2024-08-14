const db = require("../models/db");

/**
 Search API controller to fetch video data based on videoTitle inputted by user.
 */

exports.getVideosBySearch = (req, res) => {
  const videoTitle = req.params.videoTitle.trim();

  if (!videoTitle) {
    alert("👋 You need to enter some text!");
    return res.json([]);
  }

  const sql = "SELECT * FROM videos WHERE videoTitle LIKE ?";
  const searchValue = `%${videoTitle}%`;

  db.query(sql, [searchValue], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};
