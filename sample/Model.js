/**
 * Created by mike on 16-1-13.
 */

(function(root){
    root.ModelData = {};
    root.CreateModel = function(modelData,Model,options){
        var model = new Model(modelData||{},options||{});
        ModelData[model.modelName] = model;
        return model;
    };
    root.GetModel = function(Model){
        return ModelData[Model];
    };
}(this));
var NotificationModel = Backbone.Epoxy.Model.extend({
    modelName:"notification",
    defaults: {
        notificationId: "noti_12345",
        notificationTitle: "noti_Title",
        message:{
            messageId:'mess_12345',
            messageTitle:'mess_title'
        },
        publish:{
            publishId:'publ_12345',
            publTitle:'publ_title',
            publishMessage:'This is publishMessage',
            nixle:{
                nixleId:'nixl_12345',
                nixleTitle:'nixl_title',
                nixleSms:'This is nixle sms'
            }
        }
    },
    parse:function(data){

    }
});
var MessageModel = Backbone.Epoxy.Model.extend({
    modelName:"message",
    defaults: {
        messageId:'mess_12345_self',
        messageTitle:'mess_title_self',
        messageBody:'Good News'
    },
    computeds: {
        messageEmail: {
            deps: ["messageTitle", "messageBody"],
            get: function( title, body ) {
                return title +" "+ body;
            },
            set: function( value ) {
                var first = value.split(" ")[0];
                var last = value.split(" ")[1];
                return {messageTitle: first, messageBody: last};
            }
        },
        fullNameGetter: function() {
            return this.get("messageTitle") +" - "+ this.get("messageBody");
        }
    },
    parse:function(data){

    }
});
var PublishModel = Backbone.Epoxy.Model.extend({
    modelName:"publish",
    defaults: {
        publishId:'publ_12345_self',
        publTitle:'publ_title_self',
        publish:[],
        nixle:{}
    },
    parse:function(data){

    }
});
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

