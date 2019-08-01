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
    }
});