const express=require("express");

const menuRoutes=require("./routes/menuRoutes");
const orderRoutes=require("./routes/orderRoutes");

const logger=require("./middleware/logger");

const app=express();
app.use(express.json());
app.use(logger);
app.use("/menu",menuRoutes);
app.use("/orders",orderRoutes);


app.get("/",(req,res)=>{
    res.send(`<h1>☕🍵Welcome to jolly chai cafe!!</h1>
        <h3>Available Routes</h3>
        <ul>
        <li>GET /menu</li>
        <li>GET /menu/1</li>
        <li>GET /menu/search/item?name=chai</li>
        <li>GET /menu/joke</li>
        <li>POST /menu/add?role=manager</li>
        <li>POST /orders</li>
        <li>GET /orders</li>
        <li>PUT /orders</li>
        <li>DELETE /orders</li>
        </ul>
        
        `);
});

app.use((err,req,res,next)=>{
    console.log(err.message)
    res.status(500).send("😭Cafe Server is Down");
})

app.listen(3001,()=>{
    console.log("Cafe Open On port 3001");
});