const express = require("express");
const app = express();


app.set("view engine", "ejs");
//app.set("views","public/pages");


app.use(express.static("public"));

app.get("/",(req,res)=>{
 res.send("<h1>we are making progress</h1>");
});

app.get('/index',(req,res)=>{
  res.render("index", {date:new Date()})

});

app.get("/privacy",(req,res)=>{
  res.render("privacy");
})

app.get('/about',(req,res)=>{
  res.render("about", {count: Math.random()});

});
app.get('/users',(req,res)=>{
    const users = [
        { number: 1 , name: "olaide"},
        { numbe: 2 , name: "hollaheday"}
    ]
res.send(users);



});








const PORT = '2020';
app.listen(PORT,()=> {
console.log('server running on port 2020');
});