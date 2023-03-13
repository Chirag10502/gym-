//var con=require("./connection");
const express = require("express");
const app = express();
const cors= require('cors');

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.post('/add', (req, res)=>{
   console.log(req.body)
})


app.listen(3000);

