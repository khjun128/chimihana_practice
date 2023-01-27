const express = require("express");
require("express-async-errors");
const app = express();
const session = require("express-session");
const MYSQLStore = require("express-mysql-session")(session);
const port = 3000;

app.set("view engine", "pug");
app.use(express.static("public"));

app.use(
  session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
    store: new MYSQLStore({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "kohyunjun1",
      database: "chimihana",
    }),
  })
);

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
const map = require("./routes/map/index");
app.use(map);

app.get("*", (err, req, res, next) => {
  res.render("500/index");
});

app.listen(port, () => {
  console.log(`server starting at port ${port}`);
});
