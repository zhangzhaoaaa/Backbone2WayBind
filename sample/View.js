/**
 * Created by mike on 16-1-13.
 */
var NotiView = Backbone.Epoxy.View.extend({
    el: $("#notification"),
    model: CreateModel(null,NotificationModel),
    bindings: {
        "p.noti_title":"text:notificationTitle"
    },
    initialize:function(){

    }
});
new NotiView();
var MessView = Backbone.Epoxy.View.extend({
    el: $("#message"),
    model:CreateModel(null,MessageModel),
    bindings: {
        "input.messageTitle":"value:messageTitle,events:['keyup']",
        "input.messageBody":"value:messageBody,events:['keyup']",
        "p.noti_title":"text:messageEmail"
    },
    initialize:function(){

    }
});
new MessView();
var PublView = Backbone.Epoxy.View.extend({
    el: $("#publish"),
    model:CreateModel(GetModel("notification").get("publish"),PublishModel),
    bindings: {
        "input[type=checkbox]":"value:publish,events:['keyup']",
        "p.publishCheckbox":"text:publish",
        "p.publishMessage":"text:publishMessage"
    },
    initialize:function(){

    }
});
new PublView();
var NixlView = Backbone.Epoxy.View.extend({
    el: $("#publish"),
    model:CreateModel(GetModel("notification").get("publish")['nixle'],NixleModel),
    bindings: {
        "input.nixleTitle":"value:nixleTitle,events:['keyup']",
        "input.nixleMessage":"value:nixleMessage,events:['keyup']",
        "input[type=checkbox]":"value:nixleCheck,events:['change']",
        "p.nixleCheckbox":"text:nixleCheck",
        "p.nixleSms":"text:nixleSms"
    },
    initialize:function(){

    }
});
new NixlView();