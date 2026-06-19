

// console.log("Start");

// setTimeout(()=>{
//     console.log("Data Fetched");
// },5000);
// console.log("End");


// function one(){
//     two();
// }

// function two(){
//     console.log("Hello");
// }
// one();

// getUser(function(user){
//     getOrders(user, function(order){
//         getPayment(order,function(payment){
//             console.log(payment);
        
//     });
// });
// });

// const promise =new Promise((resolve,reject)=>{
//    let success=true;

//    if(success){
//     resolve("success");
//    }
//    else{
//     reject("Failed");
//    }
// })

// promise
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

//without async await

// fetchData().then((data)=>{
//     console.log(data);
// })

// async function getData(){
//     const data =await fetchData();
//     console.log(data);
// }

// const food=await orderFood();

// const result =fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// });

//async await version

// async function getUsers(){
//     const response = await fetch(
//        " https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const data =await response.json();
//     console.log(data);
// }

// getUsers();

//POST Request

// fetch("https://jsonplaceholder.typicode.com/todos/1",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         title:"Javascript",
//         body:"Fetch API",
//         userID:1
//     })
// })
// .then(res=>res.json())
// .then(data=>console.log(data));


// async function getData(){
//     try{

//     }
//     catch(error){
//         console.log(error);
//     }
// }

var nums=[1,2,3,4,5];
nums.filter(n=>n%2===0);//[2,4]
nums.reduce((acc,n)=>acc+n,0); //15
nums.find(n=>n>3);//4
nums.every(n=>n>0);//true
nums.some(n=>n>0);//true