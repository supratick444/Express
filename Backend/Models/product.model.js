const mongoose = require('mongoose')

// Schema structure 
const productSchema = new mongoose.Schema({
    
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number,
        min: 0,
        max: 100
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    stock: {
        type: Number,
        required: true
    },
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]  // An array of strings for image URLs
});

module.exports = mongoose.model("Product",productSchema)