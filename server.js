const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
const tyresRouter = require("./routes/tyres");
const brandsRouter = require("./routes/brands");

app.use("/tyres", tyresRouter);
app.use("/brands", brandsRouter);

// we setup our connection to the db
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose!"));

// serve static assets in production build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("front-end/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
