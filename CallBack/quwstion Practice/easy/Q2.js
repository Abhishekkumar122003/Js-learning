function calculator(a, b, operation){
    operation(a,b);
}
const a=5;
const b=3;
function add(a, b){
    console.log(a+b);
    
};
function sub(a, b){
    console.log(a-b);
    
};
calculator(a,b,add)
calculator(a,b,sub)