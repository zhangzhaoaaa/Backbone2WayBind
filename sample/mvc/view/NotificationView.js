/**
 * Created by zhangmike on 16/1/20.
 */
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