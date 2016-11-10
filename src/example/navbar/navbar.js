Page({
    data: {
        tabs: ["选项一", "选项二", "选项三"],
        activeIndex: "0"
    },
    tabClick: function (e) {
        this.setData({
            activeIndex: e.currentTarget.id
        });
    }
});