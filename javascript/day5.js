/* console.log("start");
setTimeout(() => {
    console.log("This run after 2 seconds");
},2000);
console.log("end");
setTimeout(() => {
    console.log("1.Made tea");
    setTimeout(() => {
        console.log("2.toast the bread");
        setTimeout(() => {
            console.log("3.Fried the eggs");
            setTimeout(() => {
                console.log("4.Served the breakfast");
            },1000);
        },2000);
    },3000);
},4000); */
/* let icecreamPromise = new Promise((resolve,reject) => {
    let icecreamready = true;
    if(icecreamready){
        resolve("Icecream is ready");
    }else{
        reject("Icecream is not ready");
    }
});
icecreamPromise.then((message) => {
    console.log("Yay!"+message);;
})
    .catch((error) => {
    console.log("Oops!"+error);
});
async function getIcecream(){
    try{
        let message = await icecreamPromise;
        console.log("Yay!"+message);
    }catch(error){
        console.log("Oops"+error);
    }
} */
const[a,b,c]=[10,20,30];
console.log(a);
console.log(b);
console.log(c);
const[x,y,z,...rest]=[10,20,30,40,50,60,70,80,90];
console.log(x);
console.log(y);
console.log(z);
console.log(rest);
const user={
    name:"John",
    age:30,
    city:"New York"
};
const{name,age,...otherDetails}=user;
console.log(name);
console.log(age);
console.log(otherDetails);
function greet({name,age}){
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
greet({name:"Alice",age:25});