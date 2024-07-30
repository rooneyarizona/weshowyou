//videoController to setup API requests to video database table

const db = require("../models/db");

//Provides service for adding video metadata to videos table
exports.uploadVideo = (req, res) => {
  const { videoTitle, videoDescription, videoGenre, videoUrl, userName } = req.body;
  const sql = `
    INSERT INTO videos (videoTitle, videoDescription, videoGenre, dateAdded, videoUrl, userName)
    VALUES (?, ?, ?, NOW(), ?, ?)
  `;
  db.query(sql, [videoTitle, videoDescription, videoGenre, videoUrl, userName], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.json({ success: true, message: "Video information saved successfully!" });
  });
};

//Provides service to select all videos from videos table
exports.getVideo = (req, res) => {
  // const { videoTitle, videoDescription, videoGenre, videoUrl } = req.body;
  const videoQuery = `SELECT * FROM VIDEOS`;
  db.query(videoQuery, (err, results) => {
    if (err) {
      return res.status(500).send({ success: false, message: err.message });
    }
    res.send({ success: true, videos: results });
  });
};
