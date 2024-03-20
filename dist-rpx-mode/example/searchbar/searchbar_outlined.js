Page({
  mixins: [require('../../mixin/common')],
  data: {
    inputVal: '',
    isFocus: false,
  },
  blurInput() {
    this.setData({
      isFocus: false,
    });
  },
  clearInput() {
    this.setData({
      inputVal: '',
    });
  },
  inputTyping(e) {
    this.setData({
      inputVal: e.detail.value,
      isFocus: true,
    });
  },
});

