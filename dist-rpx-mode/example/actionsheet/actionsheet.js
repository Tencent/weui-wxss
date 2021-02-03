Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        showIOSDialog: false,
        showAndroidDialog: false,
    },
    close: function() {
        this.setData({
            showIOSDialog: false,
            showAndroidDialog: false
        });
    },
    openIOS: function () {
        this.setData({
            showIOSDialog: true
        });
    },
    openAndroid: function () {
        this.setData({
            showAndroidDialog: true
        });
    }
});
