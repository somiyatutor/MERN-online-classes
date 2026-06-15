//Hoisting (V V imp)
// a=4;
// console.log(a)//Temporal dead zone(TDZ)
// let a=3;

// if(true){
//     var x=10;
// }
// console.log(x)


// var a=8;
// var a="somiya";

// Closure (v v imp)->a closure is a function that remembers and can access variables from its lexical scope even after the outer function has finished executing.
//lexical scope
// function outer(){
//     let count =0;

//     function inner(){
//         count++;//1 2 3
//         console.log(count);//1 2 3
//     }

   

//     return inner;
// }
// const increment=outer();
// increment();
// increment();
// increment();

// for(var i=0;i<3;i++){
//     setTimeout(function(){// setTimeout is web api func setTimeout(callbackfunction,delayinMS)
//         console.log(i);
//     },1000);
// }

// if(true){
//     const x=10;
//     let y=10;
// }
// console.log(x)//ReferenceError: x is not defined
// console.log(y)//ReferenceError: x is not defined



//Fat arrow function
// const add=(x,y)=>{
//     return x+y;
// }
// console.log(add(8,9))

//this="this" is a special keyword that refers to the object that is currently executing the function.

// const person={
//     name:"Harsh",
//     greet: function(){
//         setTimeout(()=>{//"I won't create my own this. I'll use the this from where I was created"
//             console.log(this.name);
//         },1000);
//     }
// };

// person.greet();//undefined 

//Problem with Arrow func

// const show=()=>{
//  console.log(arguments);//just like they don't create their own this, they also don't create their own arguments 
// }
// show(10,20,30);

// function show(){
//     console.log(arguments);
// }
// show(10,20,30);

//Types of arrow function
//1.arrow func with no parameters

// const welcome=()=>{
//     alert("Hello how are you guys!");
// }
// welcome()

//2.arrow func with one parameter
// const welcome=(name)=>{
//     alert(name);
// }
// welcome("Somiya")

//3.arrow func with multiple parameters
//  const add=(x,y)=>{
//     return x+y;
//  }
//  console.log(add(4,9));

//4.arrow func with implicit return (Note: Don't need to write return)
//  const add=(x,y)=> x+y;



//  console.log(add(4,9));

//5.arrow func with explicit return
//  const add=(x,y)=>{
//     x=x+5;
//     return x+y;
//  }
//  console.log(add(4,9));


//Template Literals
//1)Interpolation

// var name=prompt("Enter Your Name");
// alert(`Hi,${name}!`);

//2)Expression

// var a=3,b=7;
// console.log(`Result:${a+b}`);

//3)Multiline
// console.log(`Hi
//     Somiya
//     this
//     Side`);

//4)Conditional

// let age=14;
// console.log(`You are ${ age >=18? "An Adult" : "A Minor" }`);

//5)Nested

// let firstName="Harsh"
// let lastName="Sagar"
// console.log(`Full Name:${`${firstName} ${lastName}`}`);

//6)Tagged

// function tag(strings,name,age){
//     console.log(strings);
//     console.log(name);
//     console.log(age);
// }
// let name="John";
// let age=25;

// tag`My name is ${name} and I am ${age} years old`;


//Rest parameters
// function show(name, age, ...hobbies){
//     console.log(name);
//     console.log(age);
//     console.log(hobbies);
// }

// show("Somiya",22,"Coding","Reading");

//Spread 
// function sum(...numbers){//rest
//     console.log("numbers:",numbers);
//     console.log("Expanded:", ...numbers);
//     return numbers.reduce((total, num) => total+num,0);
// }

// const arr=[10,20,30];
// console.log(sum(...arr));//spread 60

//  Destructuring

// const colors = ["Red","Green","Blue"];

// // const first = colors[0];
// // const second =colors[1];
// // const third =colors[2];
// //const [first,,third,fourth="Yellow"]=colors;
// const[first,...rest]=colors;
// console.log(first);
// //console.log(second);
// console.log(rest);
// //console.log(fourth);//yellow
const person={
    name:"Harsh",
    age:20
};
const{name:username,age}=person;
console.log(username);
console.log(age);
