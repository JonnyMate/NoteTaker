const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/keys").mongoURI;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use("/api/notes", require("./routes/api/notes"));

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch(err => console.log(`Error connecting to database - ${err}`));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));