import express from "express";
import mongoose from "mongoose";
import ConnectDb from "./db/connectDb.js";
import connectMongo from "connect-mongo";
import session from "express-session";
import auth from "./routes/auth.js";
import "./config/passport.js";
import passport from "passport";

const app = express();
const MongoStore = connectMongo(session);

app.set("view engine", "ejs"); //template engine
ConnectDb();

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth);

app.listen(3000, () => {
  console.log("App is listening at port 3000");
});
