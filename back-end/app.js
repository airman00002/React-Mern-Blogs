const express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  database = require("./database/database");
//   path = require("path");

mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, { useNewUrlParser: true })
  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log("Cound error while connecting :" + err));

const blogsRoutes = require("./routes/blogs-routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/blogs", blogsRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Connected to port: " + port));

//* 404 Error
app.use((req, res, next) => {
  next("This somthings server Error");
});

//*Errors handler
app.use((err, req, res, next) => {
  console.log(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
