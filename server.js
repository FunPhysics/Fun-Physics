const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

const { pgPool } = require("./databaseConnection");

app.use(session({
  store: new pgSession({ // eslint-disable-line
    pool: pgPool, // Connection pool
    tableName: "sessions", // Use another table-name than the default "session" one
  }),
  secret: process.env.SESSION_COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
}));

// set public
app.use(express.static("public"));

// set ejs
app.set("view engine", "ejs");

app.all("*", (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, HEAD, PUT, PATCH, POST, DELETE",
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  next();
});

const renderRouter = require("./Routers/render").default;
const authRouter = require("./Routers/auth").default;
const questionRouter = require("./Routers/questions").default;
const articlesRouter = require("./Routers/articles").default;
const clappedArticlesRouter = require("./Routers/clappedArticles").default;
const usersRouter = require("./Routers/users").default;
const spaceRouter = require("./explore-space/space").default;

app.use("/", renderRouter);
app.use("/auth", authRouter);
app.use("/questions", questionRouter);
app.use("/articles", articlesRouter);
app.use("/clappedArticles", clappedArticlesRouter);
app.use("/users", usersRouter);
app.use("/space", spaceRouter);

// page not found middleware
app.all("*", (req, res) => {
  res.status(404).send({ msg: "Sorry, page not found !" });
});

// error middleware
app.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).send({ msg: err.message });
  // res.status(500).render("pages/error", { error: err });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started - ${PORT}`);
});
