/**
 * Created by zhangmike on 16/2/14.
 */
define("view/shoppingcart/shoppingCartView", function(require) {
    var ShoppingView = require("view/shoppingcart/shoppingItemListView");
    var ShoppingCartView = Backbone.Epoxy.View.extend({
        el:$("#shopping"),
        viewName:'shoppingCartView',
        model:SkyModel.getModel("shoppingCartModel"),
        bindings:{
            "span#totalPrice":"text:totalPrice"
        },
        initialize:function(){
            SkyView.setView(null,this);
            SkyView.setView(this.cid,new ShoppingView());
            this.listenTo(SkyModel.getCollection("shoppingCartItemCollection"),"change remove",this.listenShoppingCart);
        },
        events:{
            "click #settleAccount":"eventSettleAccount"
        },
        eventSettleAccount:function(){
            this.getJsonData();
        },
        listenShoppingCart:function(model){
            var me = this;
            var totalPrice = 0.0;
            model.collection.forEach(function(current,index,coll){
                totalPrice+=parseFloat(current.get("itemPrice"));
            });
            me.model.set("totalPrice",totalPrice.toFixed(2));
        },
        getJsonData:function(){
            var collections = SkyModel.getCollection("shoppingCartItemCollection").toJSON();
            var array = [];
            collections.forEach(function(current,index,col){
                array.push(_.pick(current,'id','quantity'));
            });
            console.log(array);
        }
    });
    return ShoppingCartView;
});
