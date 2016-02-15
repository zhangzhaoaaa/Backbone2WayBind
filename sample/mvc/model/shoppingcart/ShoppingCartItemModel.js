/**
 * Created by mike on 16-2-14.
 */
define("model/shoppingcart/ShoppingCartItemModel",function(){
    var ShoppingCartItemsModel = Backbone.Epoxy.Model.extend({
        modelName:"shoppingCartItemsModel",
        defaults: {
            id:0,
            product:{
                id:"",//商品ID
                name:"",//商品名称
                price:0.0//商品价格
            },//商品
            quantity:0,//数量
            price:0.0//小计
        },
        computeds: {
            itemPrice:function(){
                return (this.get("quantity") * this.get("product").price).toFixed(2);
            },
            productId:function(){
                return this.get("product").id;
            },
            productName:function(){
                return this.get("product").name;
            },
            productPrice:function(){
                return this.get("product").price;
            }
        }
    });
    return ShoppingCartItemsModel;
});