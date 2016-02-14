/**
 * Created by zhangmike on 16/1/20.
 */
define("view/eb/nixleView", function(require) {
    var template = require("view/eb/nixleTmpl.html");
    var NixleModel = require("model/eb/NixleModel");
    if(template !== true){
        $('body').append(template);
    }
    var NixlView = Backbone.Epoxy.View.extend({
        tagName:'div',
        viewName:'nixleView',
        model:SkyModel.createModel(SkyModel.getModel("notificationModel").get("publish")['nixle'],NixleModel),
        bindingHandlers:{
            listing: function( $element, value ) {
                if (!value){
                    return "";
                }else{
                    $element.text( value.join(", ") );
                }
            }
        },
        initialize:function(){
            this.model.fetch();
            var template = $.templates("#nixleTmpl");
            var htmlOutput = template.render(this.model.toJSON({computed:true}));
            $('#nixle').append(this.$el.html(htmlOutput));
        },
        destroy:function(){
            SkyModel.removeModelByName("nixleModel");
            this.$el.remove();
        }
    });
    return NixlView;
});
