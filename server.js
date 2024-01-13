const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

//connect to mongodb=> always use dis connection string it works
const dbUri =
  "mongodb+srv://netnija_app:netnija_app@cluster0.hkgd7sc.mongodb.net/netnija?retryWrites=true&w=majority";

mongoose
  .connect(dbUri)
  .then((res) => {
    console.log("connected to db");
    app.listen(3000);
  })
  .catch((err) => {
    console.log("Error: not connected");
  });

//register view engine
app.set("view engine", "ejs");

//middleware and static file
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.redirect("/blogs");
});


app.get("/about", function (req, res) {
  res.render("about", { title: "About" });
});

app.use('/blogs',blogRoutes); 



app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
