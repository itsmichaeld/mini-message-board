const express = require("express");
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");

const app = express();

//register view engine
app.set("view engine", "ejs");
//Middleware for encoding post data
app.use(express.urlencoded({ extended: true }));

//Listen for requests
app.listen(3000);

//middleware a static files
app.use(express.static("public"));

//Index route
app.use(indexRouter);

//Form routes
app.use(formRouter);

//Error route - 404 page - must be a the bottom. Loads if above routes aren't applicable to request
app.use((req, res) => {
  res.status(404).render("404", { title: "Error - 404" });
});
