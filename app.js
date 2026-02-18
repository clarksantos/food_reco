const express = require("express");
const cors = require("cors");

const foodRoutes = require("./routes/food.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/foods", foodRoutes);

app.get("/", (req, res) => {
    res.send("API is running...")
});

module.exports = app;