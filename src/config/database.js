const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://dadasparshuram96:U6HCsFqXCDrFbmtj@devtinder.jgv4k.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
