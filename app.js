const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const fevicon = require("serve-favicon");

const app = express();

// Setting the Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Loading Routes
const homeRoutes = require("./routes/homeRoutes");
const loginRoutes = require("./routes/loginRoutes");
const contactRoutes = require("./routes/contactRoutes");
const sendMessageRoutes = require("./routes/sendMessageRoutes");
const statsRoutes = require("./routes/statsRoutes");
const FileRoutes = require("./routes/FileRoutes");

// Setting CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Loading Fevicon
app.use(fevicon(path.join(__dirname, "public", "fevicon.ico")));

// Loading Static Files
app.use(express.static(path.join(__dirname, "public")));

// Loading data parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup Session
app.use(
  expressSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 }
  })
);

// Loading Middlewares
app.use("/contacts", contactRoutes);
app.use("/account", loginRoutes);
app.use("/send", sendMessageRoutes);
app.use("/stats", statsRoutes);
app.use("/upload", FileRoutes);
app.use("/", homeRoutes);

// Error Handlers
app.use((req, res, next) => {
  let isAuth = false;
  if (req.session && req.session.isAuth == true) {
    isAuth = true;
  }
  res.status(404).render("404", {
    title: "404 Page Not Found",
    activeNav: "",
    isAuth: isAuth,
    userName: req.session.name
  });
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).render("500", { title: "Something Went Wrong" });
});

app.listen(process.env.PORT || 9000, () => {
  console.log("The server is started on PORT 9000");
});
