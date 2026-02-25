function repeat(n, callback){
    for(let i=0; i<n; i++){
        callback();
    }
};

const greet = function(){
    console.log("hi there");   
}

repeat(5, greet);