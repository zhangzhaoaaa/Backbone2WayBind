/**
 * Created by zhangmike on 16/1/20.
 */
var PublView = Backbone.Epoxy.View.extend({
    el: $("#publish"),
    model:SkyModel.CreateModel(SkyModel.GetModel("notification").get("publish"),PublishModel),
    bindingHandlers: {
        listing: function( $element, value ) {
            $element.text( value.join(", ") );
        }
    },
    initialize:function(){
        SkyView.setView(this.cid,new NixlView());
        this.listenTo(SkyModel.GetModel("nixle"),"change",this.listenNixle);
    },
    listenNixle:function(model){
        console.log(model.toJSON());
        this.model.set("nixle",model.toJSON());
    }
});