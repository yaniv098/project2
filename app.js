const express=require("express");
const bodyParser=require("body-parser");
const reuqest=require("request");


const app = express();

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.listen(process.env.PORT || 3000,function(){
  console.log("server uis running");
});
