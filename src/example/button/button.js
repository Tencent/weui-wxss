Page({
  mixins: [require('../../mixin/common')],
  openDefault() {
    wx.navigateTo({
      url: 'button_default',
    });
  },
  openBottomfixed() {
    wx.navigateTo({
      url: 'button_bottom_fixed',
    });
  },
});
