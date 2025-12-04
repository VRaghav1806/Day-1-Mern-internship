console.log("1+2");
console.log("raghav"+18);
console.log("9"*2);
console.log("10"/2);
console.log(Number("18"));
console.log(String(23));
console.log(Boolean(0));
console.log(Boolean("Raghav"));
console.log(Boolean(""));
if("Raghav"){
    console.log("This is truthy");
}
if(5=="5"){
    console.log("This is double equals");
}
let age = 18;
age = 19;
console.log("my age is "+age);
var age1=24;
var age1=25;
console.log("my age is "+age1);
const pi=3.14; 
console.log("value of pi is "+pi); 
console.log(x);
var x=10;
/* console.log(a);
let a=10; */ //let gives error if accessed before initialization
function example(){
    if(1){
        var c=10; // var is function scoped whereas let,const is block scoped
    }
    console.log(c);
}
example();
const b=function(name){
    console.log(`Hello ${name}`);
}
b("Raghav");
function process(callback){
    console.log("processing..");
    callback();
}
function done(){
    console.log("task completed");
}
process(done);
function highorder(func){
    console.log("calling the passed function");
    func();
}
function sayhi(){
    console.log("hi callback");
}
highorder(sayhi);
const greet=function(name){
    return "Hello "+name;
}
const greetarrow=(name)=>{
    return "Hello "+name;
}
console.log(greet("Raghav"));
console.log(greetarrow("Raghav"));
const add=(x,y)=>x+y;
console.log(add(5,3));
const square=x=>x*x;
console.log(square(4));
const fruits=["apple","banana","mango"];
const newLength = fruits.push("orange");
console.log(fruits);
console.log(newLength);
const fruit=["apple","banana","mango"];
const newlength = fruit.unshift("orange");
console.log(fruit);
console.log(newlength);
const f=["apple","banana","mango"];
const newength = f.pop("orange");
console.log(f);
console.log(newength);
const frui=["apple","banana","mango"];
const nelength = frui.shift();
console.log(frui);
console.log(nelength);
const numbers=[1,2,3,4,5];
console.log(numbers);
console.log(numbers.slice(1,4));
console.log(numbers.slice(2));
console.log(numbers.slice(-2));
console.log(numbers.includes(3));
console.log(numbers.includes(6));
console.log(numbers.find(num=> num>3));
let nums=[3,5,7,8,10];
let even=nums.filter(num=> num%2==0);
console.log(even);
let greater=nums.filter(num=> num>4);
console.log(greater);






