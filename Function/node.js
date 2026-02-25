
let count = 0;
function creteCounter(){
    function incrreament(){
        count++;
        return count
    }
    return incrreament;
}
console.log(count);

const counter = creteCounter();
console.log(counter())
console.log(counter())
console.log(counter())
