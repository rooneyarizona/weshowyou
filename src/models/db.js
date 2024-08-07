const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.REACT_APP_HOST,
  port: process.env.REACT_APP_PORT,
  user: process.env.REACT_APP_UNAME,
  password: process.env.REACT_APP_PASS,
  database: process.env.REACT_APP_BUCKET,
});

console.log("username IS...", process.env.REACT_APP_UNAME);

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected...");
});

module.exports = db;
