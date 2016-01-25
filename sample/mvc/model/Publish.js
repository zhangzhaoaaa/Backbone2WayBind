/**
 * Created by zhangmike on 16/1/20.
 */
var PublishModel = Backbone.Epoxy.Model.extend({
    modelName:"publish",
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