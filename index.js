const express = require('express');
const app =express();
const cors= require('cors');
const port = process.env.PORT || 3000;

const chefData = require('./data/chefData.json')

app.get('/',(req,res)=>{
    res.send(chefData);
});

app.listen(port,()=>{
    console.log(`Server Api Running on port: ${port}`)
})