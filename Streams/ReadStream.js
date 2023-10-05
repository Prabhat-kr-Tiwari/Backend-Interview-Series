const { error } = require('console')
const fs= require('fs')
let content=''


 let readStream=fs.createReadStream('input.txt')

//what if i pass a wrong file name
// let readStream=fs.createReadStream('inpu.txt')




// here takes the entry point of the data file
// here data is event
readStream.on('data',function(chunk){

    content+=chunk

})

readStream.on('end',function(){
    console.log(content)
})
readStream.on('error',(error)=>{

    console.log(error.stack)

})