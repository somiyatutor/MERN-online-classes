const EventEmitter= require("events");
const logger=new EventEmitter();
logger.on(
    "studentAdded",(name)=>{
        console.log(`${name} added successfully`);
    }
);

logger.on("studentDeleted", (name)=>{
    console.log(`${name} deleted successfully!`)
});
module.exports=logger;