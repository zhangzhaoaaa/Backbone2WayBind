/**
 * Created by zhangmike on 16/2/14.
 */
/**
 * Created by mike on 16-2-14.
 */
define("view/shoppingcart/shoppingMallView", function(require) {
    var ShoppingView = require("view/shoppingcart/shoppingView");
    var ShoppingCartItemModel = require("model/shoppingcart/shoppingCartItemModel");
    var shoppingMallView = Backbone.Epoxy.View.extend({
        el:$('#shopping'),
        viewName:'shoppingMallView',
        bindings:"data-bind",
        initialize:function(){
            SkyView.setView(null,this);

            SkyView.setView(this.cid,new ShoppingView());
        }
    });
    return shoppingMallView;
});
