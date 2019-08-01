Page({
    openToast: function () {
        wx.showToast({
            title: '已完成',
            icon: 'success',
            duration: 3000
        });
    },
    openLoading: function () {
        wx.showToast({
            title: '数据加载中',
            icon: 'loading',
            duration: 3000
        });
    }
});