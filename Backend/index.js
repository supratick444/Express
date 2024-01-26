const mongoose = require('mongoose')
const express = require('express')
const app = express()
const Product = require('./Models/product.model')

const ProductJson = require('./Product.json')



// Connecting the database : 
const DB = 'mongodb+srv://Supratick:pR063banXFNz769J@personal-codebase.msv64di.mongodb.net/'

//returns promises hoole-> okk or catch -> error
/* For any deprication message - what we can do is this !!  */
const val = mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 
}).then(()=>{
   console.log("DB connected !!")
}).catch((err)=>{
   console.log(`no connection ${err}`)
})


/* We are creating the API the JSON data will be uploaded to the database
Better to make this part of the code in a seperate file single and run that seperately 

*/
const start = async ()=>{
  try {
    // this line makes connection with the database 
    await val
    // this line JSON Data gets uploaded to the Product collecion 
    await Product.create(ProductJson)
    // once uploaded it will not be uploading the same data again and again so from the next time it shows error !! 
    // first time it will show Uploaded 
    // from the next time we will be giving the error message !!
    console.log("Success Json Uploaded !!")
  } catch (error) {
    console.log("error")
  }      

};

start();




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