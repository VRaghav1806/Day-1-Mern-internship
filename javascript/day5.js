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
