/**
 * Created by mike on 16-2-14.
 */
define("model/shoppingcart/shoppingCartItemModel",function(){
    var ShoppingCartItemsModel = Backbone.Epoxy.Model.extend({
        modelName:"shoppingCartItemsModel",
        defaults: {
            product:{},//商品
            quantity:0,//数量
            price:0.0//小计
        }
    });
    return ShoppingCartItemsModel;
});