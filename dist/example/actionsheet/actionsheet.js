Page({
    open: function(){
        wx.showActionSheet({
            itemList: ['A', 'B', 'C'],
            success: function(res) {
                if (!res.cancel) {
                    console.log(res.tapIndex)
                }
            }
        });
    },
    data: {
        showDialog: false
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
