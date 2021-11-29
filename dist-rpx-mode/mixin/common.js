module.exports = {
  data: {
    theme: '',
    mode: '', // 模式(care：关怀模式)
  },
  onGlobalDataChanged(globalData) {
    this.setData(globalData);
  },
  onLoad() {
    const app = getApp();

    this.setData({
      theme: app.globalData.theme,
      mode: app.globalData.mode,
    });

    app.watchGlobalDataChanged(this.onGlobalDataChanged);
  },
  onUnload() {
    getApp().unWatchGlobalDataChanged(this.onGlobalDataChanged);
  },
};
