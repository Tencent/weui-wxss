Page({
    openSuccess: function () {
        wx.navigateTo({
            url: 'msg_success'
        })
    },
    openFail: function () {
        wx.navigateTo({
            url: 'msg_fail'
        })
    }
});