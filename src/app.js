const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { use } = require("moongose/routes");

app.post("/signup", (req, res) => {
  const user = new User({
    firstName: "Parshuram",
    lastName: "Dadas",
    email: "parshuram@dadas.com",
    password: "Parshuram@123",
  });

  try {
    user.save();
    res.send("User added to database");
  } catch (err) {
    res.status(400).send("error adding user to database");
  }
});

connectDB()
  .then(() => {
    console.log("Connected Database");
    // Start the server
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log("Database not connected");
  });
