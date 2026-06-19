// //Common status code 

const express = require('express');
const app = express();
const port = 3000;
const path=require("path");
// // //GET route
// // //Multiple Routes
// // app.get('/', (req, res) => {
// //   res.send('Home');
// // });

// // app.get('/about', (req, res) => {
// //   res.send('About');
// // });

// // app.get('/contact', (req, res) => {
// //   res.send('Contact');
// // });

// // //Multiple Params
// // app.get("/user/:id/:name",(req,res)=>{
// //     res.send(req.params.name);
// // })

// // //Query parameters
// // app.get("/search",(req,res)=>{
// //     res.send(req.query);
// // });

// // //Post route

// // app.post("/add",(req,res)=>{
// //     res.send("Data Added");
// // });

// // //Put route
// // app.put("/update",(req,res)=>){
// //     res.send("Updated");
// // }

// // app.delete("/delete",(req,res)=>{
// //     res.send("Deleted");
// // })
// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`);
// // });


// // app.post("/student",(req,res)=>{
// //     console.log(req.body.age);
// //     res.send("Student added");
// // })

// app.get("/home",(req,res)=>{
//    // console.log(req.headers);
//   //  console.log(req.ip);
//   //console.log(req.hostname);
//     // res.json({
//     //     name:"Rahul",
//     //     age:22
//     // });

//     //method chaining
//    // res.status(200).send("Success")

// //    const filepath =path.join(__dirname,"index.html");
// //    console.log(__dirname);
// //    console.log(filepath);
// //    res.sendFile(filepath);
//    //     res.redirect("/about");

  
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


function m1(req,res,next){
    console.log("Middleware 1");
    next();
}
function m2(req,res,next){
    console.log("Middleware 2");
    next();
}
function m3(req,res,next){
    console.log("Middleware 3");
    next();
}

app.get("/",m1,m2,m3,(req,res)=>{
    console.log("Route Handler");
    res.send("Home page");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
