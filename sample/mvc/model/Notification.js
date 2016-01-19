/**
 * Created by zhangmike on 16/1/20.
 */
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