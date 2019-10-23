Page({
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
