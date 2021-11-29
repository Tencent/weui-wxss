Page({
  mixins: [require('../../mixin/common')],
  openSuccess() {
    wx.navigateTo({
      url: 'msg_success',
    });
  },
  openText() {
    wx.navigateTo({
      url: 'msg_text',
    });
  },
  openTextPrimary() {
    wx.navigateTo({
      url: 'msg_text_primary',
    });
  },
  openCustomAreaPreview() {
    wx.navigateTo({
      url: 'msg_custom_area_preview',
    });
  },
  openCustomAreaTips() {
    wx.navigateTo({
      url: 'msg_custom_area_tips',
    });
  },
  openCustomAreaCell() {
    wx.navigateTo({
      url: 'msg_custom_area_cell',
    });
  },
  openFail() {
    wx.navigateTo({
      url: 'msg_warn',
    });
  },
});
