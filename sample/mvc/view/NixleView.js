/**
 * Created by zhangmike on 16/1/20.
 */
var NixlView = Backbone.Epoxy.View.extend({
    el: $("#publish"),
    model:SkyModel.createModel(SkyModel.getModel("notification").get("publish")['nixle'],NixleModel),
    bindings: {
        "input.nixleTitle":"value:nixleTitle,events:['keyup']",
        "input.nixleMessage":"value:nixleMessage,events:['keyup']",
        "input[type=checkbox]":"value:nixleCheck,events:['change']",
        "p.nixleCheckbox":"text:nixleCheck",
        "p.nixleSms":"text:nixleSms"
    },
    initialize:function(){

    }
});