/**
 * Created by zhangmike on 16/1/20.
 */
var PublishModel = Backbone.Epoxy.Model.extend({
    modelName:"publish",
    defaults: {
        publishId:'',
        publTitle:'',
        publish:['nixle'],
        nixle:{
            nixleMessage:"fff"
        }
    },
    parse:function(data){

    }
});