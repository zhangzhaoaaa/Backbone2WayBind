/**
 * Created by zhangmike on 16/1/20.
 */
var PublView = Backbone.Epoxy.View.extend({
    el: $("#publish"),
    model:SkyModel.CreateModel(SkyModel.GetModel("notification").get("publish"),PublishModel),
    bindings: {
        "input[type=checkbox]":"value:publish,events:['keyup']",
        "p.publishCheckbox":"text:publish",
        "p.publishMessage":"text:publishMessage"
    },
    initialize:function(){
        SkyView.setView(this.cid,new NixlView());
    }
});