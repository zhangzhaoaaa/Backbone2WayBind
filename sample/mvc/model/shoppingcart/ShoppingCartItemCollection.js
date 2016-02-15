/**
 * Created by mike on 16-2-15.
 */
/**
 * Created by mike on 16-2-14.
 */
define("model/shoppingcart/ShoppingCartItemCollection",function(require){
    var ShoppingCartItemModel = require("model/shoppingcart/ShoppingCartItemModel");
    var ListCollection = Backbone.Collection.extend({
        model: ShoppingCartItemModel,
        collectionName:"shoppingCartItemCollection"
    });
    return ListCollection;
});