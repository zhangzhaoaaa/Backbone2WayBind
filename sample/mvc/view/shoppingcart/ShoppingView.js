/**
 * Created by mike on 16-2-14.
 */
define("view/shoppingcart/shoppingView", function(require) {
    var ListItemView = require("view/shoppingcart/shoppingItemsView");
    var ShoppingCartItemModel = require("model/shoppingcart/ShoppingCartItemModel");
    var shoppingView = Backbone.Epoxy.View.extend({
        el:'#productList',
        viewName:'shoppingView',
        itemView: ListItemView,
        initialize:function(){
            this.collection = SkyModel.getCollection("shoppingCartItemCollection");
        }
    });
    return shoppingView;
});
