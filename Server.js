const express = require('express')
const cors =require("cors")
const userModel = require('./Models/User')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

require('dotenv').config();


const app=express();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors())


require('./Models/db');
const PORT =process.env.PORT || 8080;


app.get('/Ping', (req,res)=>{
    res.send('Hear we go buddy')
})


app.post('/signup', (req, res)=>{
    userModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))

})




app.listen(PORT, ()=>{
    console.log(`server is running fine teju ${PORT}`)
})





