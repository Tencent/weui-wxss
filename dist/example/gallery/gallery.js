Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        gallery: false,
    },
    close: function() {
        this.setData({
            gallery: false,
        });
    },
    open: function () {
        this.setData({
            gallery: true
        });
    },
});
