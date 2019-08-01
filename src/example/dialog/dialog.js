Page({
    data: {
        showDialog: false
    },
     openConfirm: function () {
        wx.showModal({
            title: '弹窗标题',
            content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
            confirmText: "主操作",
            cancelText: "辅助操作",
            success: function (res) {
                console.log(res);
                if (res.confirm) {
                    console.log('用户点击主操作')
                }else{
                    console.log('用户点击辅助操作')
                }
            }
        });
    },
    openDialog: function () {
        this.setData({
            istrue: true
        })
    },
    closeDialog: function () {
        this.setData({
            istrue: false
        })
    }
});
