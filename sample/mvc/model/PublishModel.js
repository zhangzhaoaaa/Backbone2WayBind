/**
 * Created by zhangmike on 16/1/20.
 */
define("model/PublishModel", function(require) {
    var PublishModel = Backbone.Epoxy.Model.extend({
        modelName:"publishModel",
        defaults: {
            publishId:'',
            publTitle:'',
            publish:[],
            nixle:{
                nixleMessage:""
            }
        },
        parse:function(data){

        }
    });
    return PublishModel;
});

