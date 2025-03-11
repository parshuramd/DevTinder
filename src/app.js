const express = require("express");

const app = express();

// Define routes
app.get("/", (req, res) => {
    res.send('home');
});

app.get("/test", (req, res) => {
    res.send('test');
});

app.get("/cypress", (req, res) => {
    res.send('cypress');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
