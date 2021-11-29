Page({
  mixins: [require('../../mixin/common')],
  data: {
    wrap: false,
  },
  onShow() {
    wx.createSelectorQuery().select('#js_btn')
      .boundingClientRect((rect) => {
        if (rect.height > 48) {
          this.setData({ wrap: true });
        }
      })
      .exec();
  },
});
