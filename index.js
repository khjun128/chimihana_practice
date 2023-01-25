const express = require("express");
require("express-async-errors");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// app.use(
//   methodOverride(function (req, res) {
//     if (req.body && typeof req.body === "object" && "_method" in req.body) {
//       var method = req.body._method;
//       delete req.body._method;
//       return method;
//     }
//   })
// );

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

const main = require("./routes/main/index");
app.use(main);
const business = require("./routes/business/index");
app.use(business);
const commuication = require("./routes/communication/index");
app.use(commuication);
const company = require("./routes/company/index");
app.use(company);
const home = require("./routes/home/index");
app.use(home);
const product = require("./routes/product/index");
app.use(product);
const program = require("./routes/program/index");
app.use(program);

app.get("*", (err, req, res, next) => {
  res.render("500/index");
});

app.listen(port, () => {
  console.log(`server starting at port ${port}`);
});
