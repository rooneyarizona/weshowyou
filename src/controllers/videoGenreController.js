const db = require("../models/db");

exports.getVideosByGenre = (req, res) => {
  const genre = req.params.videoGenre || req.query.videoGenre;

  if (!genre) {
    return res.status(400).send("Genre parameter is required.");
  }

  console.log(`Executing query for genre: ${genre}`);

  const genreQuery = "SELECT * FROM videos WHERE videoGenre = ?";

  db.query(genreQuery, [genre], (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).send(err);
    }
    console.log("Query results:", results);
    res.json(results);
  });
};
