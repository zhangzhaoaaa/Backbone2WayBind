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
        /**
         * shoppingItemListView的初始化
         * @function initialize
         * @author zhangmike
         * @date   16/2/14.
         * @description 将shoppingCartItemCollection数据设置到当前view的collection属性中
         */
        initialize:function(){
            this.collection = SkyModel.query("getCollection","shoppingCartItemCollection");
        }
    });
    return shoppingView;
});
