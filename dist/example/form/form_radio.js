Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        items: [
            { name: '1', value: 'cell standard' },
            { name: '2', value: 'cell standard', checked: 'true' },
        ]
    },
    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    }
});