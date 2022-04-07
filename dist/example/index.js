Page({
  mixins: [require('../mixin/common')],
  data: {
    list: [
      {
        id: 'form',
        name: '表单',
        open: false,
        pages: ['button', 'input', 'form', 'list', 'slideview', 'slider', 'uploader'],
      },
      {
        id: 'layout',
        name: '基础组件',
        open: false,
        pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loading', 'loadmore', 'panel', 'preview', 'progress', 'steps'],
      },
      {
        id: 'feedback',
        name: '操作反馈',
        open: false,
        pages: ['actionsheet', 'dialog', 'half-screen-dialog', 'msg', 'picker', 'toast', 'top-tips'],
      },
      {
        id: 'nav',
        name: '导航相关',
        open: false,
        pages: ['navigation-bar', 'tabbar'],
      },
      {
        id: 'search',
        name: '搜索相关',
        open: false,
        pages: ['searchbar'],
      },
    ],
  },
  kindToggle(e) {
    const { id } = e.currentTarget; const { list } = this.data;
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list,
    });
  },
  changeTheme() {
    console.log(this.data);
    getApp().themeChanged(this.data.theme === 'light' ? 'dark' : 'light');
  },
});
