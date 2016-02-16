/**
 * Created by mike on 16-2-15.
 */
define("view/shoppingcart/shoppingItemsView", function(require) {
    var template = require("view/shoppingcart/shoppingcartTmpl.html");
    if(template !== true){
        $('body').append(template);
    }
    var ListItemView = Backbone.Epoxy.View.extend({
        tagName: "li",
        initialize: function() {
            var template = $.templates("#shoppingcartItemTmpl");
            var htmlOutput = template.render(this.model.toJSON({computed:true}));
            this.$el.html(htmlOutput);
        },
        events:{
            "click .deleteItem":"eventDeleteItem",
            'click .counter':"eventChangeCount"
        },
        eventDeleteItem:function(e){
            SkyModel.getCollection("shoppingCartItemCollection").remove({id:this.getCartItemId(e)});
        },
        eventChangeCount:function(e){
            var target = e.target;
            var quantity = 0;
            var model = SkyModel.getCollection("shoppingCartItemCollection").get(this.getCartItemId(e));
            if (target.id==='minus'){
                quantity = model.get("quantity")-1;
            }else{
                quantity = model.get("quantity")+1;
            }
            model.set("quantity",quantity<0?0:quantity);
        },
        getCartItemId:function(e){
            return $(e.target).parents('.cartItem').attr('mid');
        }
    });
    return ListItemView;
});