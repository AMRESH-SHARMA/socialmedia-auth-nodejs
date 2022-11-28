
const express = require('express');
const expressValidator = require('express-validator')
const app = express()

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/config.env" });
}

//____
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
  res.send("GET Request Called Connected to Cloud")
})
//____
const user = require("./routes/userRoute");
//____
app.use("/api/", user);

module.exports = app