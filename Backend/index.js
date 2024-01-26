const mongoose = require('mongoose')
const express = require('express')
const app = express()


const DB = 'mongodb+srv://Supratick:pR063banXFNz769J@personal-codebase.msv64di.mongodb.net/'

//returns promises hoole-> okk or catch -> error
/* For any deprication message - what we can do is this !!  */
mongoose.connect(DB,{
    useNewUrlParser : true ,
    useCreateIndex : true ,
    useUnifiedTopology : true ,
    useFindAndModify : false   
}).then(()=>{
   console.log("DB connected !!")
}).catch((err)=>{
   console.log(`no connection ${err}`)
})

//Route 1 : Home-Page 
app.get('/',(req,res)=>{
     
     res.send("Hello")

});

//Route 2 : 
app.get('/two',(req,res)=>{
     
  res.send("Hello hello ")

});


const port = 3000 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});