const mongoose = require('mongoose');
var Product = require('../models/product.js')
exports.createProduct = (req, res) => {
    console.log(req.body);
    Product.create(req.body, (err, product) => {
        if(err){
            return  res.json({success:false,message: err})
        }
        res.json({success: true, product: product});
    });
}

exports.getProductList = (req, res) => {
    Product.find((err, products) => {
        if(err){
            return  res.json({success:false,message: err})
        }
        console.log(products);
        res.json({success: true, products: products});
    });
};

exports.deleteProduct = (req, res) => {
    Product.findByIdAndRemove({_id: req.params.id}, (err, product) => {
        if(err){
            return  res.json({success:false,message: err})
        }
        res.json({success: true, product: product});

    });
}

exports.getProduct = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if(err){
            return res.json({success:false,message: err})
        }
        res.json({success: true, product: product});
    })
}

exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id,req.body, (err, product) => {
        if (err){
            return res.json({success:false,message: err})
        }
        res.json({success: true, product: product});
    });
}

exports.searchProduct = (req, res) => {
    var name = req.param("name");
    var slider = req.param('slider');
    console.log(name);
    console.log(slider);
    if(slider != undefined){
        var minValue = 0;
        var maxValue = 0;
        minValue = slider.split(",")[0];
        maxValue = slider.split(",")[1];
        console.log(minValue);
        console.log(maxValue);
        Product.find({"name" : new RegExp(name, 'i'), "price" : {$gt: minValue, $lt: maxValue}}, (err, products) => {
            console.log(products);
            if(err)
                return res.json({success:false,message: err})
            else {
                res.json({success: true, products: products});
            }
        });
    }else {
        Product.find({"name" : new RegExp(name, 'i')}, (err, products) => {
            console.log(products);
            if(err)
            return res.json({success:false,message: err})
                else {
            res.json({success: true, products: products});
        }
        });
    }
}