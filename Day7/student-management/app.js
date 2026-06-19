const http=require("http");
const url=require("url");
const {getStudents,addStudent,deleteStudent}=require("./studentModule");
const logger=require("./logger");

const server=http.createServer(
    (req,res)=>{
        const parsedURL=url.parse(req.url,true);
        const pathname=parsedURL.pathname;
        if(pathname==='/'){
            res.end("Welcome To Students Server");
        }

        else if(pathname==="/students"){
            const students=getStudents();
            res.writeHead(200,{
                "Content-Type":
                "application/json"
            });
            res.end(JSON.stringify(students));
        }

        else if(pathname==="/add"){
            const name=parsedURL.query.name;
            const age=parsedURL.query.age;
            const student={
                name,age
            };
            addStudent(student);
            logger.emit("studentAdded",name);
            res.end(`${name} Student Added`);

        }

        else if(pathname=== "/delete"){
            const name=parsedURL.query.name;
            deleteStudent(name);
            logger.emit(
                "studentDeleted",
                name
            );

            res.end(
                "Student Deleted"
            );
        }
        else{
            res.statusCode=404;
            res.end("Page Not found");
        }
    }
);

server.listen(3000,()=>{
    console.log(
        "Server Running At Port 3000"
    );
});
