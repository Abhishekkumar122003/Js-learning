const path = require('path')
console.log(__dirname) //-> it print your current directory's path where you're in 
// output-> /home/harkiratstudent/code-army-js/code Army Javascript/100XBootCamp/Backend-start/Week-7/Node Bun JS runtime (cohort 3)/initialise node
// console.log(path.join(__dirname , "index.js" )) // it let's you to add path in the directory 
//output-> /home/harkiratstudent/code-army-js/code Army Javascript/100XBootCamp/Backend-start/Week-7/Node Bun JS runtime (cohort 3)/initialise node/index.js
console.log(path.join(__dirname , "../../index.js" , "/project" , "/index.js" ))