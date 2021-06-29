const EventEmitter = require("events")
const eventEmitter = new EventEmitter()

// console.log("Hi")
// console.log("Helo world")

console.log("EventEmitter",EventEmitter)
console.log("EventEmitter object",eventEmitter)

eventEmitter.on("Event-Emitted",()=>{
    console.log("listener 1");
})

eventEmitter.emit("Event-Emitted")

//Listener must be registered first only. Otherwise it won't work

const registrationEvent=new EventEmitter()

registrationEvent.on("user-registered",()=>{
    //send a Welcome email to the user
    console.log("user listener 1")
})

registrationEvent.on("user-registered",()=>{
    //send a verification email to the user
    console.log("user listener 2")
})

registrationEvent.on("user-registered",()=>{
    //send an email to the admin
    console.log("Admin listener 1")
})

registrationEvent.emit("user-registered")

const dataSendingEvent=new EventEmitter()

const {callback1,callback2,callback3} = require("./regstration-event-listeners")

dataSendingEvent.on("data-sending",callback1),
dataSendingEvent.on("data-sending",callback2),
dataSendingEvent.on("data-sending",callback3),

dataSendingEvent.emit("data-sending",{name: "Mahesh"}) 