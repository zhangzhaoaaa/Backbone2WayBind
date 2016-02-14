/**
 * Created by zhangmike on 16/1/20.
 */
define("model/eb/NixleModel", function(require) {
    var NixleModel = Backbone.Epoxy.Model.extend({
        modelName:"nixleModel",
        url:'/getNixle',
        defaults: {
            nixleId:'',
            nixleTitle:'',
            nixleMessage:'',
            nixleCheck:[],
            cap:[{label:"Luke", value:"1"}, {label:"Leia", value:"2"},{label:"mike", value:"3"}]
        },
        parse:function(data){
            return _.defaults(data.data,this.defaults);
        }
    });
    return NixleModel;
});

