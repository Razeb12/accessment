const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:String,
    category:String,
    content:String,
    image:String,
    qty: String,
    price:String,
    created:{
        type: Date,
        default: Date.now
    }
});

module.exports =mongoose.model('Product', productSchema);