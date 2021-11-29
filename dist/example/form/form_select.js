Page({
  mixins: [require('../../mixin/common')],
  data: {
    array1: ['微信号', 'QQ号', 'Email'],
    array2: ['+86', '+80', '+84', '+87'],
    array3: ['中国', '美国', '英国'],
    value1: 0,
    value2: 0,
    value3: 0,
  },
  bindPicker1Change(e) {
    this.setData({
      value1: e.detail.value,
    });
  },
  bindPicker2Change(e) {
    this.setData({
      value2: e.detail.value,
    });
  },
  bindPicker3Change(e) {
    this.setData({
      value3: e.detail.value,
    });
  },
});
