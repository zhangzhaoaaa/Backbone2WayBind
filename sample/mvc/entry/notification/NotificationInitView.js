/**
 * Created by mike on 16-1-13.
 */
define("view/notificationInitView", function(require) {
    var NotificationModel = require("model/eb/NotificationModel");
    var NotificationInitView = {
        initializeData:function(data){
            SkyModel.execute("createModel",data,NotificationModel,{parse:true});
        },
        getInstance:function(data){
            var data = {
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
                        nixleSms:'This is nixle sms',
                        nixleMessage:'aa'
                    }
                }
            };
            this.initializeData(data);
            seajs.use("view/eb/notificationView",function(NotiView){
                new NotiView();
            });
        }
    };
    return NotificationInitView;
});

seajs.use("view/notificationInitView",function(view){
   view.getInstance();
});