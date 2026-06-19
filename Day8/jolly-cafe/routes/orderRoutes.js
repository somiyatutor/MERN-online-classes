const express=require("express");
const router=express.Router();
const orders=require("../data/orders");

router.post("/",(req,res)=>{
    const order={
        id:orders.length+1,
        customerName:req.body.customerName,
        tea:req.body.tea
    };
    orders.push(order);
    res.send(
        "☕Chai Order Accepted"
    );
});


router.put("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const order=orders.find(
        order=>order.id===id
    );

    if(!order){
        return res.status(404).send("❌Order Not Found");
    }
    order.customerName=req.body.customerName;
    order.tea=req.body.tea;

    res.send("Order Updated Successfully :)")
})
router.get("/",(req,res)=>{
    res.json(orders);
});
module.exports=router;