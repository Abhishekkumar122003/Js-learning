function printArray(arr, callback){
    for (const element in arr) {
        console.log(element);
        callback();
    }
}

let array=[1,2,3,4,5,6];
function greet(){
    console.log('hi there');
}
printArray(array, greet)