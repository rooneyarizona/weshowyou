const db = require("../models/db");

/**
 * Video API controller to put video metadata to videosDB and fetch all video data.
 *
 */

exports.getVideoById = (req, res) => {
  const videoId = req.params.videoId;
  const getVideoByIdQuery = `SELECT * FROM videos WHERE videoId = ?`;

  db.query(getVideoByIdQuery, [videoId], (err, results) => {
    if (err) {
      return res.status(500).send({ success: false, message: err.message });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .send({ success: false, message: "Video not found" });
    }

    return res.json(results[0]);
  });
};

exports.deleteVideo = (req, res) => {
  const videoId = req.params.videoId;
  const deleteVideoQuery = `DELETE FROM videos WHERE videoId = ?`;

  db.query(deleteVideoQuery, [videoId], (err, results) => {
    if (err) {
      return res.status(500).send({ success: false, message: err.message });
    }

    if (results.affectedRows === 0) {
      return res
        .status(404)
        .send({ success: false, message: "This is not a valid videoId" });
    }

    res.send({ success: true, message: "Video deleted successfully" });
  });
};

exports.uploadVideo = (req, res) => {
  const { videoTitle, videoDescription, videoGenre, videoUrl, userName } =
    req.body;
  const sql = `
    INSERT INTO videos (videoTitle, videoDescription, videoGenre, dateAdded, videoUrl, userName)
    VALUES (?, ?, ?, NOW(), ?, ?)
  `;
  db.query(
    sql,
    [videoTitle, videoDescription, videoGenre, videoUrl, userName],
    (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: err.message });
      }
      res.json({
        success: true,
        message: "Video information saved successfully!",
      });
    }
  );
};

// exports.getVideo = (req, res) => {
//   const videoQuery = `SELECT * FROM VIDEOS`;
//   db.query(videoQuery, (err, results) => {
//     if (err) {
//       return res.status(500).send({ success: false, message: err.message });
//     }
//     res.send({ success: true, videos: results });
//   });
// };

// exports.getVideoByUsername = (req, res) => {
//   const userName = req.query.username;  
//   console.log("Querying videos for userName:", userName);  // Debugging log
  
//   const getVideoByUsernameQuery = `SELECT * FROM videos WHERE LOWER(userName) = LOWER(?)`;

//   db.query(getVideoByUsernameQuery, [userName], (err, results) => {
//     if (err) {
//       return res.status(500).send({ success: false, message: err.message });
//     }

//     if (results.length === 0) {
//       return res.status(404).send({ success: false, message: "No Videos Found" });
//     }

//     return res.json(results);
//   });
// };

exports.getVideo = (req, res) => {
  const { username } = req.query;  // Get query parameter

  if (username) {
    // If username is provided, fetch videos by username
    const getVideoByUsernameQuery = `SELECT * FROM videos WHERE userName = ?`;
    db.query(getVideoByUsernameQuery, [username], (err, results) => {
      if (err) {
        return res.status(500).send({ success: false, message: err.message });
      }
      if (results.length === 0) {
        return res.status(404).send({ success: false, message: "No Videos Found" });
      }
      return res.json(results);
    });
  } else {
    // Otherwise, return all videos
    const videoQuery = `SELECT * FROM videos`;
    db.query(videoQuery, (err, results) => {
      if (err) {
        return res.status(500).send({ success: false, message: err.message });
      }
      res.send({ success: true, videos: results });
    });
  }
};
