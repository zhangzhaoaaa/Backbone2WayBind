/**
 * Created by mike on 16-2-14.
 */
/**
 * Created by mike on 16-1-13.
 */
define("view/shoppingInitView", function(require) {
    var ShoppingCartModel = require("model/shoppingcart/shoppingCartModel");
    var ShoppingCartItemModel = require("model/shoppingcart/shoppingCartItemModel");
    var ShoppingInitView = {
        initializeData:function(data){
            SkyModel.createModel(data,ShoppingCartModel,{parse:true});
        },
        getInstance:function(data){
            var data = {
                totalPrice:0,//总价
                items:[
                    {
                        product:{
                            id:"123",//商品ID
                            name:"apple",//商品名称
                            price:10.0//商品价格
                        },//商品
                        quantity:10,//数量
                        price:0.0
                    }
                ]//商品条目
            };
            this.initializeData(null);
            seajs.use("view/shoppingcart/shoppingMallView",function(ShoppingMallView){

                new ShoppingMallView();
            });
        }
    };
    return ShoppingInitView;
});

seajs.use("view/shoppingInitView",function(view){
    view.getInstance();
});