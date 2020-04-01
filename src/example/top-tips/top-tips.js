Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        topTips: false,
        hide: false,
    },
    close: function() {
        this.setData({
            hide: true
        });
        setTimeout(() => {
            this.setData({
                topTips: false,
                hide: false,
            });
        }, 300);
    },
    open: function() {
        this.setData({
            topTips: true
        });
    },
});