Page({
  mixins: [require('../../mixin/common')],
  data: {
    dialog1: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    dialog5: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    wrap: false,
    wrap1: false,
  },
  onShow() {
  },
  close() {
    this.setData({
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
    });

    var that = this;
    setTimeout(function(){
      that.setData({
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
      });
    }, 400);
  },
  open1() {
    this.setData({
      dialog1: true,
      show1: true,
    });
  },
  open2() {
    this.setData({
      dialog2: true,
      show2: true,
    });

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
  },
  open3() {
    this.setData({
      dialog3: true,
      show3: true,
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
  open4() {
    this.setData({
      dialog4: true,
      show4: true,
    });
  },
  open5() {
    this.setData({
      dialog5: true,
      show5: true,
    });
  },
});
