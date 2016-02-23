/**
 * A module representing a shoppingItemView.
 * @author zhangmike
 * @date   16/2/14.
 * @module view/shoppingcart/shoppingItemView
 */
define("view/shoppingcart/shoppingItemView", function(require) {
    var template = require("view/shoppingcart/shoppingcartTmpl.html");
    if(template !== true){
        $('body').append(template);
    }
    var ListItemView = Backbone.Epoxy.View.extend({
        tagName: "li",
        /**
         * shoppingItemView的初始化
         * @function initialize
         * @author zhangmike
         * @date   16/2/14.
         * @description 将shoppingCartItem的数据填充到模板中
         */
        initialize: function() {
            var template = $.templates("#shoppingcartItemTmpl");
            var htmlOutput = template.render(this.model.toJSON({computed:true}));
            this.$el.html(htmlOutput);
        },
        events:{
            "click .deleteItem":"eventDeleteItem",
            'click .counter':"eventChangeCount"
        },
        /**
         * 删除一个商品
         * @function eventDeleteItem
         * @author zhangmike
         * @date   16/2/14.
         * @param  {Event} e 点击事件对象
         * @description 将当前选中的商品从shoppingCartItemCollection删去
         */
        eventDeleteItem:function(e){
            SkyModel.query("getCollection","shoppingCartItemCollection").remove({id:this.getCartItemId(e)});
        },
        /**
         * 改变一个商品的数量
         * @function eventChangeCount
         * @author zhangmike
         * @date   16/2/14.
         * @param  {Event} e 点击事件对象
         * @description 根据操作修改商品数量
         */
        eventChangeCount:function(e){
            var target = e.target;
            var quantity = 0;
            var model = SkyModel.query("getCollection","shoppingCartItemCollection").get(this.getCartItemId(e));
            if (target.id==='minus'){
                quantity = model.get("quantity")-1;
            }else{
                quantity = model.get("quantity")+1;
            }
            model.set("quantity",quantity<0?0:quantity);
        },
        /**
         * 获取操作对象ID
         * @function getCartItemId
         * @author zhangmike
         * @date   16/2/14.
         * @param  {Event} e 点击事件对象
         * @description 获取当前操作商品ID
         */
        getCartItemId:function(e){
            return $(e.target).parents('.cartItem').attr('mid');
        }
    });
    return ListItemView;
});