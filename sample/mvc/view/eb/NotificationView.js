/**
 * A module representing a notificationView.
 * @author zhangmike
 * @date   16/2/14.
 * @module view/eb/notificationView
 */
define("view/eb/notificationView", function(require) {
    var MessView = require("view/eb/messageView");
    var PublView = require("view/eb/publishView");
    var NotificationModel = require("model/eb/NotificationModel");
    var NotiView = Backbone.Epoxy.View.extend({
        el: $("#notification"),
        viewName:'notificationView',
        model: SkyModel.createModel(null,NotificationModel),
        bindings: {
            "input#noti_title":"value:notificationTitle,events:['keyup']"
        },
        initialize:function(){
            SkyView.setView(null,this);
            this.loadSubApp();
        },
        loadSubApp:function(){
            this.loadMessage();
            this.loadPublish();
        },
        loadMessage:function(){
            SkyView.setView(this.cid,new MessView());
        },
        loadPublish:function(){
            SkyView.setView(this.cid,new PublView());
        }
    });
    return NotiView;
});
