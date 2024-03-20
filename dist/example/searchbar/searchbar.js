Page({
  mixins: [require('../../mixin/common')],
  openSearchFilled() {
    wx.navigateTo({
      url: 'searchbar_filled',
    });
  },
  openSearchGrey() {
    wx.navigateTo({
      url: 'searchbar_grey',
    });
  },
  openSearchOutlined() {
    wx.navigateTo({
      url: 'searchbar_outlined',
    });
  },
  openSearchHomepage() {
    wx.navigateTo({
      url: 'searchbar_homepage',
    });
  },
});
