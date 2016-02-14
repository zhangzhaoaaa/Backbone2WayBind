/**
 * Created by mike on 16-2-14.
 */
define("model/shoppingcart/ProductModel",function(){
    var ProductModel = Backbone.Epoxy.Model.extend({
        modelName:"productModel",
        defaults: {
            id:"",//商品ID
            name:"",//商品名称
            price:0.0//商品价格
        }
    });
    return ProductModel;
});