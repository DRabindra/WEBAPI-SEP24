var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());


const port = 3000;
// app.use(express.json());

app.get("/name", (req, res)=>{
    res.send("Hello from respose!!");
})

app.listen(port, ()=>{
    console.log("Port is 3000.");
})
