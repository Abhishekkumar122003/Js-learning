const ob = {
    login:"hi",

}
// console.log(ob.login);

//how t converte object into "JSON-FILE"
const jsonforment = JSON.stringify(ob);
// console.log(jsonforment);


//How to write "JSON file";

const JSONFORMENT = `{
    "name":"rohit",
    "class":"A",
    "place":"hariduwar"
}`

// now convert json to javascript object
const JsObject=JSON.parse(JSONFORMENT)
console.log(JsObject);
