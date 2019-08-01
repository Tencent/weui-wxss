Page({
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
    openFail: function () {
        wx.navigateTo({
            url: 'msg_fail'
        })
    }
});
