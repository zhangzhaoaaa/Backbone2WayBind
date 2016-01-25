/**
 * Created by zhangmike on 16/1/20.
 */
var NotificationModel = Backbone.Epoxy.Model.extend({
    modelName:"notification",
    defaults: {
        notificationId: "",
        notificationTitle: "",
        message:{
            messageId:'',
            messageTitle:'',
            messageBody:''
        },
        publish:{
            publishId:'',
            publTitle:'',
            publishMessage:'',
            nixle:{
                nixleId:'',
                nixleTitle:'',
                nixleSms:''
            }
        }
    },
    parse:function(data){

    }
});