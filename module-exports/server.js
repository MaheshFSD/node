const makeSandwich=require("./make-sandwich")
// const {makeSandwich1}=require("./make-sandwich1")
// const makeSandwich1=require("./make-sandwich1").makeSandwich1
const makeSandwich2=require("./make-sandwich2")
const makeSandwich1=require("./make-sandwich1")
console.log("Server")
console.log(makeSandwich())
// console.log(makeSandwich1())
console.log(makeSandwich1.makeSandwich1())
console.log(makeSandwich2())
// console.log(spices)    Spices variable is not exported. it is private to the function making sandwich 2 and it is called abstraction.
// we can't use anything unless we export it. that is the concept of abstraction.