/**
 * A module representing a shoppingCartView.
 * @author zhangmike
 * @date   16/2/14.
 * @module view/shoppingcart/shoppingCartView
 */
define("view/shoppingcart/shoppingCartView", function(require) {
    var ShoppingItemListView = require("view/shoppingcart/shoppingItemListView");
    var ShoppingCartView = Backbone.Epoxy.View.extend({
        el:$("#shopping"),
        viewName:'shoppingCartView',
        model:SkyModel.getModel("shoppingCartModel"),
        bindings:{
            "span#totalPrice":"text:totalPrice"
        },
        /**
         * shoppingCartView的初始化
         * @function initialize
         * @author zhangmike
         * @date   16/2/14.
         * @description 将当前shoppingCartView设置到SkyView中;初始化ShoppingItemListView并设置到SkyView中;
         * 当前view监听shoppingCartItemCollection对象的change和remove事件,回调方法listenShoppingCart
         */
        initialize:function(){
            SkyView.setView(null,this);
            SkyView.setView(this.cid,new ShoppingItemListView());
            this.listenTo(SkyModel.getCollection("shoppingCartItemCollection"),"change remove",this.listenShoppingCart);
        },
        events:{
            "click #settleAccount":"eventSettleAccount"
        },
        /** 去结算
         *  @function eventSettleAccount
         *  @author zhangmike
         *  @date   16/2/14.
         *  @description 点击去结算触发此方法,会获取当前提交所需的json数据
         */
        eventSettleAccount:function(){
            this.getJsonData();
        },
        /** 监听shoppingCartItemCollection回调方法
         *  @author zhangmike
         *  @date   16/2/14.
         *  @param  {Backbone.Model.Epoxy} model
         *  @description 监听collection中的model的change和remove方法
         */
        listenShoppingCart:function(model){
            console.log(model);
            var me = this;
            var totalPrice = 0.0;
            model.collection.forEach(function(current,index,coll){
                totalPrice+=parseFloat(current.get("itemPrice"));
            });
            me.model.set("totalPrice",totalPrice.toFixed(2));
        },
        /** 获取提交数据的json方法
         *  @author zhangmike
         *  @date   16/2/14.
         *  @description 从shoppingCartItemCollection获取各个Model中的属性数据
         */
        getJsonData:function(){
            var collections = SkyModel.getCollection("shoppingCartItemCollection").toJSON();
            var array = [];
            collections.forEach(function(current,index,col){
                array.push(_.pick(current,'id','quantity'));
            });
            console.log(array);
        }
    });
    return ShoppingCartView;
});
