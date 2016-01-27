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
        pageConstants:{
            NIXLE:'nixle',
            IPAWS:'ipaws',
            NETWORK:'network'
        },
        model:SkyModel.createModel(SkyModel.getModel("notification").currentModel.get("publish"),PublishModel),
        bindingHandlers: {
            listing: function( $element, value ) {
                $element.text( value.join(", ") );
            },
            names:function(model){
                console.log(model);
                return model.name;
            },
            managePublish:function($element,value,context){
                console.log(this.view.getBinding("publish"));
                var self = this.view;

                var array = _.partition(['nixle','ipaws','network'], function(value,key,obj){
                    return _.contains(self.getBinding('publish'),value);
                });
                console.log(array);
                array[0].forEach(function(current,index,array){
                    if (current==self.pageConstants.NIXLE){
                        SkyView.setView(self.cid,new NixlView({el:$('#nixle')}));
                    }if (current==self.pageConstants.IPAWS){
                        console.log('ipaws create....');
                    }
                    if (current==self.pageConstants.NETWORK){
                        console.log('network create....');
                    }
                });
                array[1].forEach(function(current,index,array){
                    if (current==self.pageConstants.NIXLE){
                        SkyView.deleteViewByName("nixleView");
                    }if (current==self.pageConstants.IPAWS){
                        SkyView.deleteViewByName("ipawsView");
                        console.log('ipaws delete....');
                    }
                    if (current==self.pageConstants.NETWORK){
                        SkyView.deleteViewByName("networkView");
                        console.log('network delete....');
                    }
                });
                /*if(value==this.view.pageConstants.NIXLE){
                    SkyView.setView(this.cid,new NixlView({el:$('#nixle')}));
                }*/
            }
        },
        computeds:{
            nixleMessage:function(){
                return this.getBinding('nixle').nixleMessage;
            }
        },
        bindingSources: {
            nixleInfo: function() {
                return SkyModel.getModel("nixle").currentModel;
            }
        },
        events:{
            "change input[name=publish]":"eventChange"
        },
        eventChange:function(e){
            if (e.target.value=='nixle'){
                if (e.target.checked){
                    SkyView.setView(this.cid,new NixlView(/*{el:$('#nixle')}*/));
                }else{
                    SkyView.removeViewByName("nixleView");
                    //this.model.set("nixle",{});
                    //SkyView.removeViewByName('nixleView');
                }
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
