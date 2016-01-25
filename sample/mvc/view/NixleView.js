/**
 * Created by zhangmike on 16/1/20.
 */
define("view/nixleView", function(require) {
    var NixlView = Backbone.Epoxy.View.extend({
        el: $("#publish"),
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

        }
    });
    return NixlView;
});
