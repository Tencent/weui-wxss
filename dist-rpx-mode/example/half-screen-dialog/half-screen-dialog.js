Page({
  mixins: [require('../../mixin/common')],
  data: {
    dialog1: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    wrap: false,
    wrap1: false,
  },
  onShow() {
    const promise1 = new Promise((resolve, reject) => {
      wx.createSelectorQuery().select('#js_btn1_1')
        .boundingClientRect((rect) => {
          resolve(rect.height);
        })
        .exec();
    });
    const promise2 = new Promise((resolve, reject) => {
      wx.createSelectorQuery().select('#js_btn1_2')
        .boundingClientRect((rect) => {
          resolve(rect.height);
        })
        .exec();
    });
    Promise.all([promise1, promise2]).then((values) => {
      if (values[0] != values[1]) {
        this.setData({ wrap: true });
      }
    });
    const promise3 = new Promise((resolve, reject) => {
      wx.createSelectorQuery().select('#js_btn2_1')
        .boundingClientRect((rect) => {
          resolve(rect.height);
        })
        .exec();
    });
    const promise4 = new Promise((resolve, reject) => {
      wx.createSelectorQuery().select('#js_btn2_2')
        .boundingClientRect((rect) => {
          resolve(rect.height);
        })
        .exec();
    });
    Promise.all([promise3, promise4]).then((values) => {
      if (values[0] != values[1]) {
        this.setData({ wrap1: true });
      }
    });
  },
  close() {
    this.setData({
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
    });
  },
  open1() {
    this.setData({
      dialog1: true,
    });
  },
  open2() {
    this.setData({
      dialog2: true,
    });
  },
  open3() {
    this.setData({
      dialog3: true,
    });
  },
  open4() {
    this.setData({
      dialog4: true,
    });
  },
});
