/**
 * Created by zhangmike on 16/1/20.
 */
define("view/publishView", function(require) {
    var NixlView = require("view/nixleView");
    var template = require("view/publishTmpl.html");
    if(template !== true){
        $('body').append(template);
    }
    var PublView = Backbone.Epoxy.View.extend({
        el: $("#publish"),
        viewName:'publishView',
        model:SkyModel.createModel(SkyModel.getModel("notification").get("publish"),PublishModel),
        bindingHandlers: {
            listing: function( $element, value ) {
                $element.text( value.join(", ") );
            },
            names:function(model){
                console.log(model);
                return model.name;
            }
        },
        events:{
          "change input[name=publish]":"eventChange"
        },
        eventChange:function(e){
            if (e.target.value=='nixle'){
                SkyView.setView(this.cid,new NixlView());
            }
        },
        computeds:{
            nixleMessage:function(){
                return this.getBinding('nixle').nixleMessage;
            }
        },
        bindingSources: {
            nixleInfo: function() { return SkyModel.getModel("nixle")  }
        },
        initialize:function(){
            //SkyView.setView(this.cid,new NixlView());
            var template = $.templates("#publishTmpl");
            var htmlOutput = template.render(this.model.toJSON({computed:true}));
            this.$el.html(htmlOutput);
            this.listenTo(SkyModel.getModel("nixle"),"change",this.listenNixle);
        },
        listenNixle:function(model){
            //console.log(model.toJSON());
            this.model.set("nixle",model.toJSON());
        }
    });
    return PublView;
});
