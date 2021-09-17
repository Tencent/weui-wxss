Page({
    mixins: [require('../../mixin/themeChanged')],
    openDefault: function () {
        wx.navigateTo({
            url: 'button_default'
        })
    },
    openBottomfixed: function () {
        wx.navigateTo({
            url: 'button_bottom_fixed'
        })
    },
});
