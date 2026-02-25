//Scope and Closure,HOF
//Global=>Accesible to everyone
//Functional =>Accessible to that function
//Block level scope => Accessible only to that block
//"var" varible can't be access which is define inside the function scope outside side the function 
function conutCounter(){
    let count  =0 ;
    function increment(){
        count++;
        return count;
    }
    return increment;
}
const count = conutCounter()
console.log(count());
console.log(count());
console.log(count());
console.log(count());
