/**
 * A module representing a shoppingItemListView.
 * @author zhangmike
 * @date   16/2/14.
 * @module view/shoppingcart/shoppingItemListView
 */
define("view/shoppingcart/shoppingItemListView", function(require) {
    var itemView = require("view/shoppingcart/shoppingItemView");
    var ShoppingCartItemModel = require("model/shoppingcart/ShoppingCartItemModel");
    var shoppingView = Backbone.Epoxy.View.extend({
        el:'#productList',
        viewName:'shoppingItemListView',
        itemView: itemView,
        initialize:function(){
            this.collection = SkyModel.getCollection("shoppingCartItemCollection");
        }
    });
    return shoppingView;
});
