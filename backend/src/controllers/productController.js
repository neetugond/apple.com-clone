const Product = require('../models/productModel');
const ApiFeatures = require('../utils/apifeatures');
// admin route
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body); 
        res.status(201).json({
            success: true,
            product
        })
    } catch (err) {
        return res.status(500).send({ Error: err.message });
    }
    }

// get all the product route
exports.getAllProducts = async (req, res) => {
    try {
        const apifeatures = new ApiFeatures(Product.find(), req.query).search()
        const products = await apifeatures.query;
        res.status(200).json({
            success: true,
            products
        })
      } catch (err) {
        return res.status(500).send({ Error: err.message });
      }
        
    }


    // get product details

exports.getProductDetails = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(500).json({
                success: false,
                message:"Product not found"
            })
        }
        res.status(200).json({
            success: true,
            product
        })
      } catch (err) {
        return res.status(500).send({ Error: err.message });
      }
      
    }
    



    // Update Product for Admin

exports.updateProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);
        product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!product) {
            return res.status(500).json({
                success: false,
                message:"Product not found"
            })
        }
        res.status(200).json({
            success: true,
            product
        })
    } catch (err) {
        return res.status(500).send({ Error: err.message });
    }
}
    
    
    // Delete Product
exports.deleteProduct = 
    async (req, res, next) => {
        try {
            let product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(500).json({
                    success: false,
                    message:"Product not found"
                })
            }
            await product.remove();
            res.status(200).json({
                success: true,
                message: "Product Delete Successfully"
            })
           
        
        } catch (err) {
            return res.status(500).send({ Error: err.message });
        }
    }
    

    
