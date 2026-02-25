function greet(name , callback){
    console.log(name);
    callback();
    
}
const name='Rohit';

const hey = function(){
    console.log('hello');
    
}
greet(name, hey)