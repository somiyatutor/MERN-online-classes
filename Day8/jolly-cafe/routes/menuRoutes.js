const express=require("express");
const router =express.Router();
const menu=require("../data/menu");
const adminCheck = require("../middleware/adminCheck");

router.get("/",(req,res)=>{
    res.json(menu);
});

router.get("/search/item",(req,res)=>{
    const keyword=req.query.name;
    const result=menu.filter(
        m=>m.item.toLowerCase().includes(keyword.toLowerCase())
    );
    res.json(result);
});

router.post(
    "/add",adminCheck,(req,res)=>{
        menu.push(req.body);
        res.send("✅New Tea Added To Menu");
    }
);

router.get(
    "/joke",(req,res)=>{
    const jokes=[
        "😂Chai peene se coding fast hoti hai",
        "😂Bug bhi chai peeke bhaag gaya",
        "😂Production issue ka solution EK AUR CHAI",
        "😂Developer ki salary se zyada chai bik gayi",
        "😂Chai aur console.log sab problem solve kar dete hain"
    ];

    const randomIndex=Math.floor(
        Math.random()*jokes.length
    );
    res.send(jokes[randomIndex]);
    console.log(jokes[randomIndex]);
}
);


router.get("/:id",(req,res)=>{
    const id =parseInt(req.params.id);
    const item=menu.find(m=>m.id===id);
    res.json(item);
});


module.exports=router;