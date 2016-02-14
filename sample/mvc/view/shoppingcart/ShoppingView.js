/**
 * Created by mike on 16-2-14.
 */
define("view/shoppingcart/shoppingView", function(require) {
    var template = require("view/shoppingcart/shoppingcartTmpl.html");
    if(template !== true){
        $('body').append(template);
    }
    var ListItemView = Backbone.View.extend({
        tagName: "li",
        initialize: function() {
            var template = $.templates("#shoppingcartItemTmpl");
            var htmlOutput = template.render(this.model.toJSON({computed:true}));
            this.$el.html(htmlOutput);
        }
    });
    var coll = Backbone.Collection.extend({
        model: Backbone.Model
    });
    var shoppingView = Backbone.Epoxy.View.extend({
        el:$('#productList'),
        viewName:'shoppingView',
        bindings:"data-bind",
        itemView: ListItemView,

        initialize:function(){
            this.collection = new coll();
            //var template = $.templates("#shoppingcartTmpl");
            //var htmlOutput = template.render(this.model.toJSON({computed:true}));
            //this.$el.html(htmlOutput);
        }
    });
    return shoppingView;
});
