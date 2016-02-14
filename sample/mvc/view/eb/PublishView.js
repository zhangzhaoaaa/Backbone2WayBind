/**
 * Created by zhangmike on 16/1/20.
 */
define("view/eb/publishView", function(require) {
    var NixlView = require("view/eb/nixleView");
    var template = require("view/eb/publishTmpl.html");
    var PublishModel = require("model/eb/PublishModel");
    if(template !== true){
        $('body').append(template);
    }
    var PublView = Backbone.Epoxy.View.extend({
        el: $("#publish"),
        viewName:'publishView',
        pageConstants:{
            NIXLE:'nixle',
            IPAWS:'ipaws',
            NETWORK:'network'
        },
        model:SkyModel.createModel(SkyModel.getModel("notificationModel").get("publish"),PublishModel),
        bindingHandlers: {
            listing: function( $element, value ) {
                $element.text( value.join(", ") );
            },
            names:function(model){
                console.log(model);
                return model.name;
            }
        },
        computeds:{
            nixleMessage:function(){
                return this.getBinding('nixle').nixleMessage;
            }
        },
        bindingSources: {
            nixleInfo: function() {
                return SkyModel.getModel("nixleModel");
            }
        },
        events:{
            "change input[name=publish]":"eventChange"
        },
        createSubView:function(){
            var args = [].slice.call(arguments,0);
            if (args[0]){
                SkyView.setView(this.cid, new args[1]());
            }else{
                SkyView.removeViewByName(args[2]);
            }
        },
        eventChange:function(e){
            switch (e.target.value){
                case this.pageConstants.NIXLE:
                    this.createSubView(e.target.checked,NixlView,"nixleView");
                    break;
                case this.pageConstants.IPAWS:
                    break;
                case this.pageConstants.NETWORK:
                    break;
            }
        },
        initialize:function(){
            var template = $.templates("#publishTmpl");
            var htmlOutput = template.render(this.model.toJSON({computed:true}));
            this.$el.html(htmlOutput);
            this.listenTo(SkyModel.getModel("nixle"),"change",this.listenNixle);
        },
        listenNixle:function(model){
            console.log(model.toJSON());
            this.model.set("nixle",model.toJSON());
        }
    });
    return PublView;
});
