function _next(){
    var that = this;
    if(this.data.progress >= 100){
        this.setData({
            disabled: false
        });
        return true;
    }
    this.setData({
        progress: ++this.data.progress
    });
    setTimeout(function(){
        _next.call(that);
    }, 20);
}

Page({
    data: {
        progress: 0,
        disabled: false
    },
    upload: function(){
        if(this.data.disabled) return;

        this.setData({
            progress: 0,
            disabled: true
        });
        _next.call(this);
    }
});