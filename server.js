const express = require('express')

//create rest objects to use express objects
const app = express()

//route
app.get('/',(req,res)=>{
    return res.status(200).send("welcome to server");
});

//PORT
const PORT = 8080;

//listen
app.listen(PORT, () =>{
    console.log("server Running");   
})