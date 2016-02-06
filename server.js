var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));


app.get("/", function(req, res){
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/register", function(req, res){
  res.sendFile(process.cwd() + "/views/register.html");
});

app.listen(PORT, function(){
  console.log("App is listening to %s", PORT);
});