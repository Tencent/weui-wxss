var base64 = require("../images/base64");
Page({
    mixins: [require('../../mixin/themeChanged')],
    onLoad: function(){
        this.setData({
            icon: base64.icon20
        });
    }
});