Page({
  mixins: [require('../../mixin/common')],
  open(event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.url,
    });
  },
});
