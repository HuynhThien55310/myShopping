module.exports = function(app) {
    var Cart = require('../controllers/cartController');  
    app.route('/cart')
        .get(Cart.getCart);
    
    app.route('/cart/add/:id')
        .get(Cart.addToCart)

    app.route('/cart/remove/:id')
        .get(Cart.removeFromCart);

    app.route('/cart/clear')
        .get(Cart.clearCart)
}