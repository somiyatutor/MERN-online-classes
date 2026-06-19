// //blocking code
// const fs=require("fs");
// const data=fs.readFileSync("demo.txt");
// console.log(data.toString());
// console.log("End");


//non blocking code
// const fs=require("fs");
// fs.readFile("demo.txt",(err,data)=>{
//     console.log(data.toString());
// }
// )
// console.log("End");

// console.log("hello");
// console.log(__dirname);
// console.log(__filename);

//Module 

//FS module-file handling

//const fs=require("fs");
//fs.writeFileSync("demo1.txt","hello")
// const data=fs.readFileSync("demo.txt");
// console.log(data.toString())
//fs.appendFileSync("demo.txt","Hello");
//fs.unlinkSync("demo.txt");

//path module-path manipulation

// const path=require("path");
// console.log(path.basename(__filename));

// //Os module-system information

// const os=require("os");
// console.log(os.platform());
// console.log(os.homedir());

//HTTP module -To create the server

// const http=require("http");
// const server= http.createServer((req,res)=>{
//     res.write("Hello Students !! How are you all?");
//     res.end();
// });

// server.listen(3000);

//Routing
// const http=require("http");
// const server = http.createServer((req,res)=>{
//     //home page
//     if(req.url==="/" && req.method==="GET"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.end("<h1>Home Page</h1>")
//     }

//     //about page
//     else if(req.url==="/about" && req.method==="GET"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.end("<h1>About page</h1>")
//     }
//     else if(req.url==="/data" &&req.method==="POST"){
//         res.writeHead(201);
//         res.end("Data Received!");
//     }
// });
// server.listen(3000);


//event module

const eventemitter = require("events");
const event =new eventemitter();
event.on("greet",()=>{
    console.log("welcome");
});
event.emit("greet");