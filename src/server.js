const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const videoRoutes = require("./routes/videos");
const userRoutes = require("./routes/users");
const feedbackRoutes = require("./routes/forms");
const commentRoutes = require("./routes/comments");
const authRoutes = require("./routes/auth");
const searchRoutes = require("./routes/search");
const genreRoutes = require("./routes/videoGenre")

app.use("/api/videos", videoRoutes);
app.use("/api/users", userRoutes);
app.use("/api/userFeedback", feedbackRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/videos/search", searchRoutes);
app.use("/api/videos/genre", genreRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
