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
greet("raghav");
function greet(name){
    console.log(`Hello ${name}`);
}
