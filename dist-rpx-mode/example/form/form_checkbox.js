Page({
  mixins: [require('../../mixin/common')],
  data: {
    items: [
      { name: '1', value: 'standard is dealt for u.' },
      { name: '2', value: 'standard is dealicient for u.', checked: 'true' },
      { name: '3', value: 'standard is for u', checked: 'true', disabled: 'true' },
    ],
  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
  },
});
