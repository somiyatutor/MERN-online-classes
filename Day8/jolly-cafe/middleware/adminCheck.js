const adminCheck=(req,res,next)=>{
    const role=req.query.role;

    if(role==="manager"){
        next();
    }
    else{
         res.status(403).send("Access Denied! Only  Manager Can Update Menu");
    }
};

module.exports=adminCheck;