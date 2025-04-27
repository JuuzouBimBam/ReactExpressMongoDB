require("dotenv").config(); // allows to access env variables
const express = require("express"); // importing express into our app

const app = express(); // initializing express server

app.use(express.json()); // parse json, look into requests
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("React Express Server");
}); // request, response. Check if the app is running (su Postman galiu :)

app.post("/name", (req, res) => {
  if (req.body.name) {
    return res.json({ name: req.body.name });
  } else {
    return res.status(400).json({ error: "No name provided" });
  }
});

// dabar patikrinsim per PORT, ar serveris klausosi
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
