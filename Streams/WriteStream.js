const fs= require('fs')
let data='This is data'


let writeStream=fs.WriteStream('output.txt')

writeStream.write(data,'utf-8')
writeStream.end()
writeStream.on('finish',()=>{
    console.log('Writing completed')
})