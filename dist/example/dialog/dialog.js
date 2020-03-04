Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        iosDialog1: false,
        iosDialog2: false,
        androidDialog1: false,
        androidDialog2: false,
    },
    close: function () {
        this.setData({
            iosDialog1: false,
            iosDialog2: false,
            androidDialog1: false,
            androidDialog2: false,
        })
    },
    openIOS1: function() {
        this.setData({
            iosDialog1: true
        });
    },
    openIOS2: function() {
        this.setData({
            iosDialog2: true
        });
    },
    openAndroid1: function() {
        this.setData({
            androidDialog1: true
        });
    },
    openAndroid2: function() {
        this.setData({
            androidDialog2: true
        });
    },
});
