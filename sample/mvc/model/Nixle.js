/**
 * Created by zhangmike on 16/1/20.
 */
var NixleModel = Backbone.Epoxy.Model.extend({
    modelName:"nixle",
    defaults: {
        nixleId:'',
        nixleTitle:'',
        nixleMessage:'',
        nixleCheck:[]
    },
    parse:function(data){

    }
});
