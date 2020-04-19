var express = require('express')
var app = express()

app.get('/', (req, res) =>{
 console.log('Hello world')
 res.send('Hello world') 
})

app.get('/crash',(req, res)=>{
    console.log('Crash!!')
    res.send('Crash')
    process.exit(1) 
})
app.listen(process.env.Port,()=>console.log('Server is running at',process.env.Port))