Page({
    mixins: [require('../../mixin/themeChanged')],
    data: {
        value: '',
        showClearBtn: false,
        isWaring: false,

        currentValue: '',
        isCurrentWaring: false,
    },
    onCurrentInput(evt) {
        const { currentValue } = evt.detail;
        this.setData({
            isCurrentWaring: true,
        });
    },
    onInput(evt) {
        const { value } = evt.detail;
        this.setData({
            value,
            showClearBtn: !!value.length,
            isWaring: false,
        });
    },
    onClear() {
        this.setData({
            value: '',
            showClearBtn: false,
            isWaring: false,
        });
    },
    onConfirm() {
        if (this.data.value.length < 16) {
            this.setData({
                isWaring: true,
            });
        }
    },
});
