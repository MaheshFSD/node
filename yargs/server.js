const yargs  = require("yargs");

console.log("process",process.argv)
console.log("yargs",yargs.length)
console.log("yargs",yargs.argv)
// console.log("yargs",yargs.argv.length) 

console.log("params", yargs.argv.name, yargs.argv.age)
//or
const params = yargs.argv
console.log(params.name,params.age)

if(params.name)
console.log(params.name)

