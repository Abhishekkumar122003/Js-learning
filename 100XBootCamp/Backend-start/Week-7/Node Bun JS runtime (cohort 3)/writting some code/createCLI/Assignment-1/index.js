// My task is to create command line interface which take file path as an argument and find the number of word present in that file


// how, I write a code which count number of word in file in simple way

// const fs = require('fs');
//     console.log(process.argv)

// function numword(path){
//     fs.readFile(path,"utf-8",(err,data)=>{
//        let total=0;
//       for(let i=0;i<data.length; i++){
//        if(data[i]==" "){
//         total++;
//        }
//       }
//        console.log(total+1);
//     })
// }

// numword(process.argv[2]);


// how to read through our own CLI command
// use commander to make 
const fs = require("fs");
const {Command} = require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program.command('count')
    .description('count the number of word in a file')
    .argument('<file>', 'file to count')
    .action((file)=>{
        fs.readFile(file,'utf-8' , (err , data)=>{
            // if(err){
            //     console.error(err);
            // }else{
                const word = data.split(' ').length;
                console.log(`There are ${word} words in ${file}`)
            // }
        });
    });

program.command('count_sentences')
    .description('count the number of word in a file')
    .argument('<file>', 'file to count')
    .action((file)=>{
        fs.readFile(file,'utf-8' , (err , data)=>{
            // if(err){
            //     console.error(err);
            // }else{
               
                const line = data.split('\n').length;
               
                console.log(`There are ${line} lines in ${file}`)
            // }
        });
    });

    program.parse();