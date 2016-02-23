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
    SkyModel.ModelData = [];
    SkyModel.createModel = function(modelData,Model,options){
        var model = new Model(modelData||{},options||{});
        this.ModelData[model.modelName] = model;
        return model;
    };
    SkyModel.getModel = function(modelName,options){
        return this.ModelData[modelName]||{};
    };
    SkyModel.removeModelByName = function(modelName,options){
        var modelData = SkyModel.getModel(modelName).toJSON();
        resetModel(SkyModel.getModel(modelName),modelData);
    };
    SkyModel.fetchModel = function(modelArray,options){
        modelArray.forEach(function(current,index,array){
            current.fetch();
        });
    };
    SkyModel.createCollection = function(modelData,Collection,options){
        var collection = new Collection(modelData||{},options||{});
        this.ModelData[collection.collectionName] = collection;
        return collection;
    };
    SkyModel.getCollection = function(collectionName,options){
        return this.ModelData[collectionName]||{};
    };
    function resetModel(model,attrs) {
        for (var attribute in attrs) {
            if (attrs.hasOwnProperty(attribute)) {
                var value = attrs[attribute];
                if (_.isString(value)) {
                    model.set(attribute,"");
                }else if(_.isArray(value)) {
                    model.set(attribute,[]);
                }else if(_.isNull(value)){
                    model.set(attribute,null);
                }else if (_.isObject(value)) {
                    model.set(attribute,{});
                }
            }
        }
    }

    //TODO 逐步改造成command这种模式
    var _SkyModel = {
        ModelData:[],
        createModel:function( modelData, Model, options ){
            var model = new Model(modelData||{},options||{});
            this.ModelData[model.modelName] = model;
            return model;
        },
        getModel:function( modelName, options ){
            return this.ModelData[modelName]||{};
        },
        removeModelByName:function( modelName, options ){
            var modelData = SkyModel.getModel(modelName).toJSON();
            this._resetModel(SkyModel.getModel(modelName),modelData);
        },
        fetchModel:function( modelArray, options ){
            modelArray.forEach(function( current, index, array ){
                current.fetch();
            });
        },
        createCollection:function( modelData, Collection, options ){
            var collection = new Collection( modelData||{}, options||{} );
            this.ModelData[collection.collectionName] = collection;
            return collection;
        },
        getCollection:function( collectionName, options ){
            return this.ModelData[collectionName]||{};
        },
        _resetModel:function( model, attrs ) {
            for (var attribute in attrs) {
                if (attrs.hasOwnProperty(attribute)) {
                    var value = attrs[attribute];
                    if (_.isString(value)) {
                        model.set(attribute,"");
                    }else if(_.isArray(value)) {
                        model.set(attribute,[]);
                    }else if(_.isNull(value)){
                        model.set(attribute,null);
                    }else if (_.isObject(value)) {
                        model.set(attribute,{});
                    }
                }
            }
        }
    };
    SkyModel.execute = function(name){
        if (_SkyModel[name]){
            return _SkyModel[name].apply(_SkyModel,[].slice.call(arguments,1));
        }else{
            throw new Error(name+"function is undefined!");
        }
    };
    SkyModel.query = function(name){
        if (_SkyModel[name]){
            return _SkyModel[name].apply(_SkyModel,[].slice.call(arguments,1));
        }else{
            throw new Error(name+"function is undefined!");
        }
    };
    return SkyModel;
}));
