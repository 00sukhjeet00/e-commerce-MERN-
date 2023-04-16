const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully Connected to Database :)"))
    .catch((err) => console.log("Error connecting to database -_- ", err));
};

module.exports = connectDB;
