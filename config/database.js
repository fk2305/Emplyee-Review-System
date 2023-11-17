const mongoose = require("mongoose");

 
mongoose.connect("mongodb://0.0.0.0:27017/ERS",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to Database");
});

// exporting the connection.
module.exports = db;
