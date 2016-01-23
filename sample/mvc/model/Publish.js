/**
 * Created by zhangmike on 16/1/20.
 */
var PublishModel = Backbone.Epoxy.Model.extend({
    modelName:"publish",
    defaults: {
        publishId:'publ_12345_self',
        publTitle:'publ_title_self',
        publish:[],
        nixle:{
            nixleMessage:""
        }
    },
    parse:function(data){

    }
});