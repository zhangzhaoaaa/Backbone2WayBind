/**
 * Created by zhangmike on 16/1/20.
 */
var MessView = Backbone.Epoxy.View.extend({
    el: $("#message"),
    viewName:'messageView',
    model:SkyModel.createModel(null,MessageModel),
    bindings: {
        "input#messageTitle":"value:messageTitle,events:['keyup']",
        "input#messageBody":"value:messageBody,events:['keyup']"
    },
    initialize:function(){
        var template = $.templates("#messageTmpl");
        var htmlOutput = template.render(this.model.toJSON({computed:true}));
        this.$el.html(htmlOutput);
    }
});