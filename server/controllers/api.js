const Product= require("../models/product");
const fs = require('fs');

module.exports = class API {
    static async fetchAllProduct(req, res){
        try{
            const products = await Product.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(404).json({message: err.message});

        }
    }
    static async fetchProductByID(req, res){
       const id = req.params.id;
       try {
           const product = await Product.findById(id);
           res.status(200).json(product);
       } catch (err) {
           res.status(404).json({message: err.message});
       }
    }
    static async createProduct(req, res){
       const product = req.body;
       const imagename = req.file.filename;
       product.image = imagename;
       try{
           await Product.create(product);
           res.status(201).json({message: 'Item Created Successfully!'});
       }
       catch (err){
           res.status(400).json({message: err.message});
       }
    }
    static async updateProduct(req, res){
       const id = req.params.id;
       let new_image = '';
       if(req.file){
           new_image = req.file.filename;
           try {
               fs.unlinkSync('./uploads/'+ req.body.old_image);
           } catch (err) {
               console.log(err);
           }
       }
       else{
           new_image = req.body.old_image;
       }
       const newProduct = req.body;
       newProduct.image = new_image;
       try {
           await Product.findByIdAndUpdate(id, newProduct);
           res.status(200).json({message: ' Updated Successfully!'});
       } catch (err) {
           res.status(404).json({message: err.message});
       }
    }
    static async deleteProduct(req, res){
       const id = req.params.id;
       try {
           const result = await Product.findByIdAndDelete(id);
           if(result.image != ''){
               try {
                   fs.unlinkSync('./uploads/'+ result.image);
               } catch (err) {
                   console.log(err);
               }
           }
           res.status(200).json({message: 'Post Deleted Successfully!'});
       } catch (err) {
           res.status(404).json({message: err.message});
       }
    }
};