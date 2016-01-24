/**
 * Created by zhangmike on 16/1/20.
 */
var MessView = Backbone.Epoxy.View.extend({
    el: $("#message"),
    viewName:'messageView',
    model:SkyModel.createModel(null,MessageModel),
    bindings: {
        "input.messageTitle":"value:messageTitle,events:['keyup']",
        "input.messageBody":"value:messageBody,events:['keyup']",
        "p.noti_title":"text:messageEmail"
    },
    initialize:function(){
        var template = $.templates("#theTmpl");
        var htmlOutput = template.render(this.model.toJSON({computed:true}));
        this.$el.html(htmlOutput);
    }
});