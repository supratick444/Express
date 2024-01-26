const ProductJson = require('./Product.json')
const Product = require('./Models/product.model')

// Val should be the seperate mongoDB file .

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
  
  