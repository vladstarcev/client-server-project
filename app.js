const express = require("express");
const bp = require("body-parser");

const app = express();
app.use(bp.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});
