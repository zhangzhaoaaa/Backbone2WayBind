/**
 * Created by mike on 16-1-13.
 */
(function(){
    var NotificationInitView = {
        getInstance:function(){
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
                        nixleSms:'This is nixle sms'
                    }
                }
            };
            //SkyModel.createModel(data,NotificationModel,{parse:true});
            new NotiView();
        }
    };
    NotificationInitView.getInstance();
}());

console.log(SkyView.views);