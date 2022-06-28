const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./api/.env" });

const cors = require("cors");
const routes = require("./routes/index");
const volleyball = require("volleyball");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const db = require("../config/db");

//app.use(cors());

app.use(express.json());

app.use(volleyball);

app.use(cookieParser());

app.use(
  sessions({
    secret: "tmdb",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(8000, () => console.log("Escuchando en el puerto 8000"));
});
//
