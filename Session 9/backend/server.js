const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors("https://localhost:4200"));
app.use(express.json());

app.get("/test", (req,res)=>{
    res.send("hello backend is on");
});

app.post("/test", (req,res)=>{
    const { message } =req.body;

    res.json(`{message':${message}}`);
});
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)

})