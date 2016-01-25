/**
 * Created by zhangmike on 16/1/20.
 */
var NixleModel = Backbone.Epoxy.Model.extend({
    modelName:"nixle",
    defaults: {
        nixleId:'',
        nixleTitle:'',
        nixleMessage:'',
        nixleCheck:[],
        cap:[{label:"Luke", value:"1"}, {label:"Leia", value:"2"},{label:"mike", value:"3"}]
    },
    parse:function(data){

    }
});
