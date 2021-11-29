const sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  mixins: [require('../../mixin/common')],
  data: {
    tabs: ['选项一', '选项二', '选项三'],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
  },
  onLoad() {
    const that = this;
    wx.getSystemInfo({
      success(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
        });
      },
    });
  },
  tabClick(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
    });
  },
});
