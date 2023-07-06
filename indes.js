const express = require("express");
const getMethod = require("./middlewares/watch.middleware")

const app = express();




app.use('/', getMethod, (req,res)=>{
    res.send("respondieno")
});

// app.get('/', getMethod, (req,res)=>{
//     res.send("respondieno")
// });
// app.post('/', getMethod, (req,res)=>{
//     res.send("respondieno")
// });
// app.put('/', getMethod, (req,res)=>{
//     res.send("respondieno")
// });
// app.delete('/', getMethod, (req,res)=>{
//     res.send("respondieno")
// });


//? middlewares de terceros
app.listen(8000, ()=>{
    console.log(`puerto: ${8000}`)
})