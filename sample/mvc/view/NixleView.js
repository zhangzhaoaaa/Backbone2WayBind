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
        bindings: {
            "input#nixleTitle":"value:nixleTitle,events:['keyup']",
            "input#nixleMessage":"value:nixleMessage,events:['keyup']",
            "input[type=checkbox]":"value:nixleCheck,events:['change']",
            "p#nixleCheckbox":"text:nixleCheck",
            "p#nixleSms":"text:nixleSms"
        },
        initialize:function(){
            var template = $.templates("#nixleTmpl");
            var htmlOutput = template.render(this.model.toJSON({computed:true}));
            this.$el.html(htmlOutput);
        }
    });
    return NixlView;
});
