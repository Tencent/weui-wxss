var base64 = require("../images/base64");

Page({
    mixins: [require('../../mixin/themeChanged')],
    onLoad: function(){
        this.setData({
            icon20: base64.icon20,
            icon60: base64.icon60
        });
    }
});