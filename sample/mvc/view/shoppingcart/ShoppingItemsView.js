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
            //this.listenTo(this.model, 'destroy', this.remove);
        },
        events:{
            "click .deleteItem":"eventDeleteItem"
        },
        eventDeleteItem:function(e){
            SkyModel.getCollection("shoppingCartItemCollection").remove({id:1});
        }
    });
    return ListItemView;
});