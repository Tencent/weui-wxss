function _next() {
  const that = this;
  if (this.data.progress >= 100) {
    this.setData({
      disabled: false,
    });
    return true;
  }

  this.data.progress += 1;
  this.setData({
    progress: this.data.progress,
  });
  setTimeout(() => {
    _next.call(that);
  }, 20);
}

Page({
  mixins: [require('../../mixin/common')],
  data: {
    progress: 0,
    disabled: false,
  },
  upload() {
    if (this.data.disabled) return;

    this.setData({
      progress: 0,
      disabled: true,
    });
    _next.call(this);
  },
});
