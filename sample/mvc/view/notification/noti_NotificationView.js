/**
 * Created by zhangmike on 16/1/24.
 */
var noti_NotiView = Backbone.Epoxy.View.extend({
    el: $("#notification"),
    viewName:'noti_notificationView',
    model: SkyModel.createModel(null,NotificationModel),
    bindings: {
        "p.noti_title":"text:notificationTitle"
    },
    initialize:function(){
        //SkyView.setView(null,this);
        this.loadSubApp();
    },
    loadSubApp:function(){
        console.log('lajlll');
        this.loadMessage();
        this.loadPublish();
    }
});
_.extend(noti_NotiView.prototype,NotiView.prototype);
new noti_NotiView();