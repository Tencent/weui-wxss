Page({
  mixins: [require('../../mixin/common')],
  data: {
    vcodeValue: false,
    msg: false,
    checkValue: 1,
    check: false,
  },
  bindVcodeInput(e) {
    if (e.detail.value) {
      this.setData({
        vcodeValue: true,
      });
    }
  },
  checkStatus() {
    if (!this.data.check) {
      this.setData({
        msg: true,
      });
    }
    const that = this;
    setTimeout(() => {
      that.setData({
        msg: false,
      });
    }, 320);
  },
  checkboxChange(e) {
    if (e.detail.value.includes('1')) {
      this.setData({
        check: true,
      });
    } else {
      this.setData({
        check: false,
      });
    }
  },
});
