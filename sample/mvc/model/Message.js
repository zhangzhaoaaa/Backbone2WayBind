/**
 * Created by zhangmike on 16/1/20.
 */
var MessageModel = Backbone.Epoxy.Model.extend({
    modelName:"message",
    defaults: {
        messageId:'',
        messageTitle:'',
        messageBody:''
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