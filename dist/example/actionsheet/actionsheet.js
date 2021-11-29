Page({
  mixins: [require('../../mixin/common')],
  data: {
    showIOSDialog: false,
    showAndroidDialog: false,
  },
  close() {
    this.setData({
      showIOSDialog: false,
      showAndroidDialog: false,
    });
  },
  openIOS() {
    this.setData({
      showIOSDialog: true,
    });
  },
  openAndroid() {
    this.setData({
      showAndroidDialog: true,
    });
  },
});
