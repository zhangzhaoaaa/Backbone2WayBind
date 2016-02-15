/**
 * Created by zhangmike on 16/2/14.
 */
define("view/shoppingcart/shoppingMallView", function(require) {
    var ShoppingView = require("view/shoppingcart/shoppingView");
    var shoppingMallView = Backbone.Epoxy.View.extend({
        el:$("#shopping"),
        viewName:'shoppingMallView',
        model:SkyModel.getModel("shoppingCartModel"),
        bindings:{
            "span#totalPrice":"text:totalPrice"
        },
        initialize:function(){
            SkyView.setView(null,this);
            SkyView.setView(this.cid,new ShoppingView());
            this.listenTo(SkyModel.getCollection("shoppingCartItemCollection"),"change",this.listenShoppingCart);
        },
        listenShoppingCart:function(model){
            var me = this;
            var totalPrice = 0.0;
            model.collection.forEach(function(current,index,coll){
                totalPrice+=parseFloat(current.get("itemPrice"));
            });
            me.model.set("totalPrice",totalPrice.toFixed(2));
        }
    });
    return shoppingMallView;
});
