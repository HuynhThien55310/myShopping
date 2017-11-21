module.exports = function(app) {
    var Product = require('../controllers/productController');  
    app.route('/product')
        .post(Product.createProduct);
    
    app.route('/product/:id')
        .get(Product.getProduct)
        .put(Product.updateProduct)
        .delete(Product.deleteProduct);

    app.route('/products')
        .get(Product.getProductList);

    app.route('/search/product')
        .get(Product.searchProduct);
}