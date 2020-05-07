const express = require("express");
const bp = require("body-parser");

const app = express();
app.use(bp.urlencoded({extended: true}));
app.use(express.static("public"));

let users = [];

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/signup", function(req,res) {
  res.sendFile(__dirname + "/signup.html");
});

app.get("/contact", function(req,res) {
  res.sendFile(__dirname + "/contact.html");
});


app.post("/login", function(req,res) {
  let username = req.body.user;
  let password = req.body.password;

  if (username == "admin" && password == "admin") {
    res.redirect("/contact")
  }


  for(var i=0;i<users.length;i++) {
    if (users[i].name == username && users[i].password == password) {
      res.send("Validated!")
    }
  }
  res.send("Not validated!")
});

app.post("/signup", function(req,res) {
  let username = req.body.user;
  let password = req.body.pass;
  let confirm = req.body.confirm;

  if (password === confirm) {

    let user = {
      name: username,
      password: password
    }
    users.push(user);
  }
  console.log(users);
  res.redirect("/")
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});
