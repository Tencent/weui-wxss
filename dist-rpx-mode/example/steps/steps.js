Page({
  mixins: [require('../../mixin/common')],
  openStepsHorizonal() {
    wx.navigateTo({
      url: 'steps_horizonal',
    });
  },
  openStepsVertical() {
    wx.navigateTo({
      url: 'steps_vertical',
    });
  },
});
