const base64 = require('../images/base64');
Page({
  mixins: [require('../../mixin/common')],
  onLoad() {
    this.setData({
      icon: base64.icon20,
    });
  },
});
