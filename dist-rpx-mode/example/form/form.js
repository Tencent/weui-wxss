Page({
    mixins: [require('../../mixin/themeChanged')],
    open: function (event) {
        wx.navigateTo({
            url: event.currentTarget.dataset.url,
        })
    },
});
