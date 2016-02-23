/**
 * Created by mike on 16-2-14.
 */
/**
 * Created by mike on 16-1-13.
 */
define("view/shoppingInitView", function(require) {
    var ShoppingCartModel = require("model/shoppingcart/ShoppingCartModel");
    var ShoppingCartItemCollection = require("model/shoppingcart/ShoppingCartItemCollection");
    var ShoppingInitView = {
        initializeData:function(data){
            SkyModel.execute("createModel",data,ShoppingCartModel,{parse:true});
            var shoppingCartModel = SkyModel.execute("getModel","shoppingCartModel");
            SkyModel.execute("createCollection",shoppingCartModel.get("items"),ShoppingCartItemCollection);
        },
        getInstance:function(data){
            var data = {
                totalPrice:109.10,//总价
                items:[
                    {
                        id:1,
                        product:{
                            id:1,//商品ID
                            name:"apple",//商品名称
                            price:10.1//商品价格
                        },//商品
                        quantity:10,//数量
                        price:100.1
                    },
                    {
                        id:2,
                        product:{
                            id:2,
                            name: "Mike",
                            price:3.0
                        },
                        quantity:3,
                        price:9.0
                    }
                ]//商品条目
            };
            this.initializeData(data);
            seajs.use("view/shoppingcart/shoppingCartView",function(ShoppingCartView){
                new ShoppingCartView();
            });
        }
    };
    return ShoppingInitView;
});

seajs.use("view/shoppingInitView",function(view){
    view.getInstance();
});