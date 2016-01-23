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
        root.SkyModel = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
    }
}(function(root,SkyModel,_,$){
    SkyModel.ModelData = {};
    SkyModel.createModel = function(modelData,Model,options){
        var model = new Model(modelData||{},options||{});
        this.ModelData[model.modelName] = model;
        return model;
    };
    SkyModel.getModel = function(Model){
        return this.ModelData[Model];
    };
    SkyModel.fetchModel = function(modelArray){

    };
    return SkyModel;
}));
