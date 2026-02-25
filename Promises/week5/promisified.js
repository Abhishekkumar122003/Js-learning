const fs= require('fs')
function fsReadFilePromises(filename, encoding){
    return new Promise(function(resolve, reject){
        fs.reafFile(filename, encoding, function(err, data){
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}


fsReadFilePromises("a.txt", "utf-8")
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(`Error while reading file: ${err} `);
        
    })
let sum=0 ;
for(let i=0; i<=100; i++){
    sum+=i;
}
console.log(sum);
