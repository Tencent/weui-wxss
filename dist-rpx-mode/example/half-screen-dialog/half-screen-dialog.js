Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        dialog1: false,
        dialog2: false,
        dialog3: false
    },
    close: function() {
        this.setData({
            dialog1: false,
            dialog2: false,
            dialog3: false
        });
    },
    open1() {
        this.setData({
            dialog1: true
        });
    },
    open2() {
        this.setData({
            dialog2: true
        });
    },
    open3() {
        this.setData({
            dialog3: true
        });
    },
});
