# 和WeUI的用法差异

### 不支持相邻兄弟选择器 -> `after` someone

#### 如：`.weui-cells__title + .weui-cells` -> `.weui-cells_after-title`
Old
```html
<div class="weui-cells__title">带说明的列表项</div>
<div class="weui-cells"></div>
```

New
```html
<view class="weui-cells__title">带说明的列表项</view>
<view class="weui-cells weui-cells_after-title"></view>
```


### 不支持级联选择器 -> `in` someone

#### 如：`.weui-cell_access .weui-cell__ft` -> `weui-cell__ft_in-access`
Old
```html
<div class="weui-cell weui-cell_access">
    <div class="weui-cell__ft"></div>
</div>
```

New
```html
<view class="weui-cell weui-cell_access">
    <view class="weui-cell__ft weui-cell__ft_in-access"></view>
</view>
```

#### 如：`.weui-cells_radio .weui-cell__ft` -> `.weui-cell__ft_in-radio`
Old
```html
<div class="weui-cells weui-cells_radio">
    <label class="weui-cell weui-check__label">
        <div class="weui-cell__ft">
            <span class="weui-icon-checked"></span>
        </div>
    </label>
</div>
```

New
```html
<view class="weui-cells weui-cells_with-title">
    <label class="weui-cell weui-check__label">
        <view class="weui-cell__ft weui-cell__ft_in-radio">
            <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon>
        </view>
    </label>
</view>
```


### icon
采用小程序的icon。因为原生的`icon`的`font-size:0`，所以需要新增一些类来控制icon的边距，如`.weui-icon-radio`、`.weui-icon-checkbox_circle`等，具体看代码。（当然，你也可以不加。）


### button
采用小程序的button，`.weui-btn`则用于控制间距

Old
```html
<a href="javascript:;" class="weui-btn weui-btn_primary">页面主操作 Normal</a>
```

New
```html
<button class="weui-btn" type="primary">页面主操作 Normal</button>
```


### `weui-cell_access`的`:active`
由`navigator`的`hover-class`来指定类`weui-cell_active`来控制

New
```html
<navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
    <view class="weui-cell__bd">cell standard</view>
    <view class="weui-cell__ft weui-cell__ft_with-access">说明文字</view>
</navigator>
```


### `.weui-input`
因为采用小程序的input，键盘弹起高度有所区别，所以实现上也有所改变，需要增加`.weui-cell_input`的扩展类

Old
```html
<div class="weui-cell">
    <div class="weui-cell__bd">
        <input class="weui-input" />
    </div>
</div>
```

New
```html
<view class="weui-cell weui-cell_input">
    <view class="weui-cell__bd">
        <input class="weui-input" />
    </view>
</view>
```