module.exports={
callback1:(data)=>{
    console.log(data)
},
callback2:(data)=>{
    console.log(data.name)
},
callback3:({name})=>{
    console.log(name)
}
}