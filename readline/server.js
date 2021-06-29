const readline = require("readline")
const readline1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

readline1.question("What is your name", function(name){
    readline1.question(`what is your age ${name}`,function(age)
    {
        console.log(`you are ${age} years old ${name}.`)
        readline1.close()
    })
})

//This readline is inherited from events, so it can use on method.
readline1.on("close",function(){
    console.log("bye bye")
    process.exit(0)
})
