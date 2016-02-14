/**
 * Created by mike on 16-2-14.
 */
define("model/shoppingcart/ShoppingCartModel",function(){
    var ShoppingCartModel = Backbone.Epoxy.Model.extend({
        modelName:"shoppingCartModel",
        defaults: {
            totalPrice:0,//总价
            items:[]//商品条目
        }
    });
    return ShoppingCartModel;
});