Page({
  mixins: [require('../../mixin/common')],
  data: {
    iosDialog1: false,
    iosDialog2: false,
    androidDialog1: false,
    androidDialog2: false,
  },
  close() {
    this.setData({
      iosDialog1: false,
      iosDialog2: false,
      androidDialog1: false,
      androidDialog2: false,
    });
  },
  openIOS1() {
    this.setData({
      iosDialog1: true,
    });
  },
  openIOS2() {
    this.setData({
      iosDialog2: true,
    });
  },
  openAndroid1() {
    this.setData({
      androidDialog1: true,
    });
  },
  openAndroid2() {
    this.setData({
      androidDialog2: true,
    });
  },
});
