/**
 * Created by zhangmike on 16/1/19.
 */
(function(factory){
    var root = (typeof self == 'object' && self.self == self && self) ||
        (typeof global == 'object' && global.global == global && global);

    if (typeof define === 'function' && define.amd) {
        define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
            // Export global even in AMD case in case this script is loaded with
            // others that may still expect a global Backbone.
            root.Backbone = factory(root, exports, _, $);
        });
    } else if (typeof exports !== 'undefined') {
        var _ = require('underscore'), $;
        try { $ = require('jquery'); } catch(e) {}
        factory(root, exports, _, $);
    } else {
        root.SkyView = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
    }
}(function(root, SkyView, _, $){
    SkyView.views=[];
    SkyView.references=[];
    //TODO add referenceId
    //TODO add getReferenceIdByView
    SkyView.setView=function(parentId,view,options){
        SkyView.views.push({parentId:parentId,cid:view.cid,view:view,name:view.viewName});
    };
    SkyView.getViewById=function(view){
        return _.where(SkyView.views,{cid:view.cid})[0];
    };
    SkyView.getParentView=function(view){
        var currentView=this.getViewById(view);
        return _.where(SkyView.views,{cid:currentView.parentId});
    };
    SkyView.getSubView=function(view){
        return _.where(SkyView.views,{parentId:view.cid});
    };
    SkyView.getViewByName=function(viewName){
        var views = _.where(SkyView.views,{name:viewName});
        if (views&&views.length>0){
            return views[0];
        }else{
            return null;
        }
    };
    SkyView.removeViewByName=function(viewName){
        if (this.getViewByName(viewName)){
            this.getViewByName(viewName).view.destroy();
            SkyView.views = SkyView.views.filter(function(current,index,obj){
                    return current.name!=viewName;
            });
        }
    };
    SkyView.addReferenceView=function(view,viewName){
        var referenceView = this.getViewByName(viewName);
        var currentView=this.getViewById(view);
        if (!_.contains(SkyView.references,{desId:referenceView.cid,srcId:currentView.cid})){
            SkyView.references.push({desId:referenceView.cid,srcId:currentView.cid});
        }
    };
    SkyView.getReferenceView=function(params){
        return _.where(SkyView.references,params);
    };
    return SkyView;
}));