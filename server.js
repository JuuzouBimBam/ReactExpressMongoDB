require("dotenv").config(); // allows to access env variables
const express = require("express"); // importing express into our app
const mongoose = require("mongoose");

// import routes
const authRoute = require("./routes/auth");

const app = express(); // initializing express server

app.use(express.json()); // parse json, look into requests
app.use(express.urlencoded());

app.get("/api", (req, res) => {
  res.send("React Express Server");
}); // request, response. Check if the app is running (su Postman galiu :)

// šito nebereikia, nes tai buvo tik ištestuoti aplikacijai
/*
app.post("/name", (req, res) => {
  if (req.body.name) {
    return res.json({ name: req.body.name });
  } else {
    return res.status(400).json({ error: "No name provided" });
  }
});
*/

// when GET request for auth root, it looks for authRoute which is inside auth.js
app.use("/api/auth", authRoute);
// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");

    // dabar patikrinsim per PORT, ar serveris klausosi
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
