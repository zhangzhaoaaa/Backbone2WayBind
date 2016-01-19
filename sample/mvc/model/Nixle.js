/**
 * Created by zhangmike on 16/1/20.
 */
var NixleModel = Backbone.Epoxy.Model.extend({
    modelName:"nixle",
    defaults: {
        nixleId:'mess_12345_self',
        nixleTitle:'mess_title_self',
        nixleMessage:'',
        nixleCheck:[]
    },
    parse:function(data){

    }
});
