function multiplewGreet(func, count){//higher order function
    for(let i=1; i<=count; i++){
        func()
    }
}


let greet = function(){
    console.log("hello");
}

multiplewGreet(greet, 5);//dont pass greet liuke greet()

//Higheer order function

function oddEvenTest(request){
    if(request == odd){
        return function(n){
            console.log(n%2 != 0);

            return odd;
        }
    }else if(request == even){
        return function(n){
            console.log(n%2 == 0);

            return even;
        }
    }else{
        console.log ("wrong request")
    }
}
let request ="odd"; //even