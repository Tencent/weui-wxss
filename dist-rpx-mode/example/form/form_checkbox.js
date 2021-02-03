Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        items: [
            { name: '1', value: 'standard is dealt for u.' },
            { name: '2', value: 'standard is dealicient for u.', checked: 'true' },
        ]
    },
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    }
});