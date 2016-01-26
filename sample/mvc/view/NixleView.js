/**
 * Created by zhangmike on 16/1/20.
 */
define("view/nixleView", function(require) {
    var template = require("view/nixleTmpl.html");
    if(template !== true){
        $('body').append(template);
    }
    var NixlView = Backbone.Epoxy.View.extend({
        el: $("#nixle"),
        viewName:'nixleView',
        model:SkyModel.createModel(SkyModel.getModel("notification").get("publish")['nixle'],NixleModel),
        bindingHandlers:{
            listing: function( $element, value ) {
                $element.text( value.join(", ") );
            }
        },
        initialize:function(){
            this.model.fetch();
            var template = $.templates("#nixleTmpl");
            var htmlOutput = template.render(this.model.toJSON({computed:true}));
            this.$el.html(htmlOutput);
        },
        destroy:function(){
            this.remove();
        }
    });
    return NixlView;
});
