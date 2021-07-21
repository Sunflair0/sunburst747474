require("dotenv").config();
const express = require("express");


const app = express();
const PORT = process.env.PORT || 8080;



app.use(express.static(__dirname + "/build"));



app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});


app.listen(PORT, function(){
console.log("Listening on port 3306");
})
