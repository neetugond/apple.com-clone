const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncError');
const ApiFeatures = require('../utils/apifeatures');
// instead of doing again and again try catch make error handling middleware

exports.createProduct = catchAsyncErrors(
    async (req, res, next) => {
        const product = await Product.create(req.body);
    
        res.status(201).json({
            success: true,
            product
        })
    }
)
// get all the product route
exports.getAllProducts = catchAsyncErrors(
    async (req, res) => {
        const ApiFeature = new ApiFeatures(Product.find().req.query)
        const products = await Product.find();
        res.status(200).json({
            success: true,
            products
        })
    }
)

    // get product details

exports.getProductDetails = catchAsyncErrors(
    async (req, res, next) => {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return  next(new ErrorHandler("Product not found", 404))
        }
        res.status(200).json({
            success: true,
            product
        })
    }
    )



    // Update Product for Admin

exports.updateProduct = catchAsyncErrors(
    async (req, res, next) => {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return  next(new ErrorHandler("Product not found", 404))
        }
        
       product= await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
       return  res.status(201).send(product)
               
            
}
    )
    
    // Delete Product
exports.deleteProduct = catchAsyncErrors(
    async (req, res, next) => {
        const product = await Product.findById(req. params.id);

             if (!product) {
                return  next(new ErrorHandler("Product not found", 404))
        }
        await product.remove();

        res.status(200).json({
            success: true,
            message: "Product Delete Successfully"
        })
    }
    )

    
