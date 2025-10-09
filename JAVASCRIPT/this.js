const student = {
    name: "raushan",
    course:"BCA",
    age:23,
    math: 93,
    eng: 95,
    phy: 97,
    getAvg(){
        //this keyword refers to an object that 
        // is executing the current piece of code
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

//TRY AND CATCH 
//try := the try statenment allows you to define a block of code 
//to be tested for eror whie it is being executed.

//catch: the catch statenmenttt allows you to define a block of code 
//to be executed if an error occurs in the try block.

try{
    console.log(a);
}catch{
    console,log("error occured:variable does not exist");
}

//Arrow function are nameless function

// const func=(arg1, arg2...)=>{
//  function deffination
// }

const sum = (a, b) => {
    return a+b;
}

//implicit return:= agr sirf 1 value ko return krna ho to ye syntax use hota hai
const mul = (a,b) => (
    a*b
);



//set Timeout wo function hai jo ki ek specific time ke baad koi kaam krta hai


//setTimeout(function(callback function), timeout(kitne time baadd ye kam krwana chahte hai))


console.log("hii there");

setTimeout( ()=>{
    console.log("this is set timeout function");
}, 4000);//4000ms = 4s
console.log("welcome to");



//setInterval:= ye function har specific 
// time ke baad koi kamm krta hai bar bar utne 
// time pe bar bar us function ko krte rhta hai 

let id = setInterval( ()=>{
    console.log("apna colage");
}, 2000);

console.log(id);


// this with Arrow function

//function me this ka use 
// calling object pr depend krega 


//in arrow funcrtionn me lexical scop hona chahiye 
//the see parent scop arrow function ke 
// liye scope whi hoga jo parent ka scope hoga

const employ = {
    name:"aman",
    marks:95,
    prop: this,//global scope
    getName: function(){
        return this.name;
    },

    getMarks: () => {
        console.log(this);//parent scope -> window
        return this.marks;
    },

    getInfo: function(){
        setTimeout( ()=>{
            console.log("you");//stufent
        }, 2000)
    },

    getInfo2: function(){
        setTimeout(function(){
            console.log(this);//windoe
        }, 2000)
    }
};