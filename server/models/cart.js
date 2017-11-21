module.exports = function Cart(cart) {
    this.items = cart.items || {};

    this.add = function(item, id) {
        var cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = {item: item, quantity: 0};
        }
        cartItem.quantity++;
    };

    this.remove = function(id) {
        delete this.items[id];
    };

    this.removeall = function(){
        for (var id in this.items) {
            delete this.items[id];
        }
    };

    this.getItems = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};
