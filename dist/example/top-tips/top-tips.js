Page({
  mixins: [require('../../mixin/common')],
  data: {
    topTips: false,
    hide: false,
  },
  close() {
    this.setData({
      hide: true,
    });
    setTimeout(() => {
      this.setData({
        topTips: false,
        hide: false,
      });
    }, 300);
  },
  open() {
    this.setData({
      topTips: true,
    });
  },
});
