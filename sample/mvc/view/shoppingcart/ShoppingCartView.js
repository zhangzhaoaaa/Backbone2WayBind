/**
 * A module representing a shoppingCartView.
 * @author zhangmike
 * @date   16/2/14.
 * @module view/shoppingcart/shoppingCartView
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
        /** This is a description of the foo function.
         *
         * @param model
         */
        listenShoppingCart:function(model){
            console.log(model);
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
