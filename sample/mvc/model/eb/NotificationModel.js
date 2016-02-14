/**
 * Created by zhangmike on 16/1/20.
 */
define("model/eb/NotificationModel", function(require) {
    var NotificationModel = Backbone.Epoxy.Model.extend({
        modelName:"notificationModel",
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
    return NotificationModel;
});
