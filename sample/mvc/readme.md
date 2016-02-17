##View规范
###注释说明
<p>使用jsDoc生成文档说明</p>
###代码结构
* initialize
<p>调用父级方法;设置监听</p>
* render
<p>初始化页面</p>
* event*
<p>事件方法以event开头</p>
* listen*
<p>监听方法以listen开头</p>
* getJsonData
<p>获取最后提交数据</p>
###命令
jsdoc sample/mvc/view/shoppingcart/*.js