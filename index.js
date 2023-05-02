const express = require('express');
const app =express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Server Running')
});

app.listen(port,()=>{
    console.log(`Server Api Running on port: ${port}`)
})