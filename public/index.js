require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const passportConf = require("./server/config/passport.conf");
const app = express();
const PORT = process.env.PORT || 8080;
const userRoutes = require("./server/routes/users.routes");
const favoritesRoutes = require("./server/routes/favorites.routes");

app.use(express.json());
passportConf(passport);
app.use(cookieParser());
app.use(express.static(__dirname + "/build"));
app.use(passport.initialize());

app.use("/api/users", userRoutes);
app.use("/api/favorites", favoritesRoutes);

app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});


app.listen(PORT, function(){
console.log("Listening on port 3306");
})