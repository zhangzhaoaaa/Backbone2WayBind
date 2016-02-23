/**
 * Created by zhangmike on 16/1/20.
 */
define("view/eb/messageView", function(require) {
    var template = require("view/eb/messageTmpl.html");
    var MessageModel = require("model/eb/MessageModel");
    if(template !== true){
        $('body').append(template);
    }
    var MessView = Backbone.Epoxy.View.extend({
        el: $("#message"),
        viewName:'messageView',
        model:SkyModel.execute("createModel",
                SkyModel.execute("getModel","notificationModel").get("message"),MessageModel),
        bindingSources: {
            nixleInfo: function() { return SkyModel.execute("getModel","nixleModel")  }
        },
        initialize:function(){
            var template = $.templates("#messageTmpl");
            var htmlOutput = template.render(this.model.toJSON({computed:true}));
            this.$el.html(htmlOutput);
        }
    });
    return MessView;
});
