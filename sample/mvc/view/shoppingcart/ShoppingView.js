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
            $('#shopping').append(this.$el.html());
        },
        events:{
            'click .counter':"eventChangeCount"
        },
        eventChangeCount:function(e){
            var target = e.target;
            var $target = $(target);
            var quantity = 0;
            var model = this.collection.get($target.attr('mid'));
            if (target.id==='minus'){
                quantity = model.get("quantity")-1;
            }else{
                quantity = model.get("quantity")+1;
            }
            model.set("quantity",quantity<0?0:quantity);
        }
    });
    return shoppingView;
});
