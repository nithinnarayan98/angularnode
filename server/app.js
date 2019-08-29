var express = require('express');
var bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
var path = require('path');
var mongo = require('mongoose');
var url = "mongodb://localhost/sdb"
var product = require('./model/product');

mongo.connect(url,{useNewUrlParser:true}, (err)=>{
  if(err) throw err;
  else console.log("Database connected");
})
app.use(bodyparser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get("/data",function(req,res){
res.send({msg:"data from server"})
})
app.get("/view",(req,res)=>{
    product.find({},(err,result)=>{
      if (err) throw err;
      else res.send(result);
    })
  })
//

app.post("/add",(req,res)=>{
    var p1 = new product();
    p1.productId = req.body.id;
    p1.productName = req.body.name;
    p1.productPrice = req.body.price;
    p1.save((err)=>{
      if (err) throw err;
      else {
         res.send({msg:"Data Added"});
      }
    })
  })

app.listen(8000,function(req,res){
    console.log("server started listening..." )
})