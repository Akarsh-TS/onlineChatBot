var express = require("express");
var app = express();
app.use("/public", express.static(process.cwd() + "/public"));
app.set("view engine","ejs");

app.get("/",function(req, res){
	res.render("index");
});

app.listen(666);