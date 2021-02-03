Page({
    mixins: [require('../../mixin/themeChanged')],
    openSuccess: function () {
        wx.navigateTo({
            url: 'msg_success'
        })
    },
    openText: function () {
        wx.navigateTo({
            url: 'msg_text'
        })
    },
    openTextPrimary: function () {
        wx.navigateTo({
            url: 'msg_text_primary'
        })
    },
    openCustomAreaPreview: function () {
        wx.navigateTo({
            url: 'msg_custom_area_preview'
        })
    },
    openCustomAreaTips: function () {
        wx.navigateTo({
            url: 'msg_custom_area_tips'
        })
    },
    openCustomAreaCell: function () {
        wx.navigateTo({
            url: 'msg_custom_area_cell'
        })
    },
    openFail: function () {
        wx.navigateTo({
            url: 'msg_warn'
        })
    }
});
