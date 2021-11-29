const base64 = require('../images/base64');

Page({
  mixins: [require('../../mixin/common')],
  onLoad() {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60,
    });
  },
});
