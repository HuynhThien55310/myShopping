var Cart = require('../models/cart.js')
var Product = require('../models/product.js')
exports.getCart = (req, res) => {
    if (!req.session.cart) {
        var mess = "Oops! Your cart is empty."
        return  res.json({success:false, message: mess});
    }else{
        var cart = new Cart(req.session.cart);
        var products ={};
        carts = cart.getItems();
       return res.json({success:false, carts: carts});
    }
}

exports.addToCart = (req, res) => {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Product.findOne({_id:productId}, (err,product) => {
      if(product == null){
        return  res.json({success:false, message: err});
      }else {
        cart.add(product, productId);
        req.session.cart = cart;
        res.redirect('/products');
      }
    });
}

exports.removeFromCart = (req, res) => {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.remove(productId);
    req.session.cart = cart;
    res.redirect('/cart');
}

exports.clearCart = (req, res) => {
    req.session.cart = {};
    res.redirect('/cart');
}