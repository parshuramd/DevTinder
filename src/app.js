const express = require("express");
const { adminAuth, userAuth } = require("./auth")
const app = express();


app.use("/admin",adminAuth,(req,res)=>{
    res.send("getting all data")
})
app.get("/user", (req, res) => {
    res.send({ firstName: "Parshuram", lastName: "Dadas" });
});

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("user created successfully.")
})

app.patch("/user", (req, res) => {
    res.send("user patched successfully");
})

app.put("/user", (req, res) => {
    res.send("user updated sucessfully");
})

app.delete("/user", (req, res, next) => {
    // res.send("user deleted successfully")
    next()
}, (req, res) => {
    res.send("deleted")
})

// Start the server 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
