Page({
  mixins: [require('../../mixin/common')],
  data: {
    gallery: false,
  },
  close() {
    this.setData({
      gallery: false,
    });
  },
  open() {
    this.setData({
      gallery: true,
    });
  },
});
