### v2.6.6 (2023-07-25)

#### Bugfixes
* fix: 修复因为cssnano配置导致的weui-wxss伪元素选择器格式问题



### v2.6.5 (2023-07-21)

#### Bugfixes
* fix: 基础色板更新（FG-5、REDORANGE、TAG-TEXT-RED、TAG-BACKGROUND-RED）
* fix: 伪元素统一使用双冒号



### v2.6.4 (2023-06-30)

#### Bugfixes
* fix: informationBar组件局部颜色变量改为全局颜色变量



### v2.6.3 (2023-06-29)

#### Bugfixes
* fix: less的unit()方法向前兼容



### v2.6.2 (2023-06-29)

#### Features
* feat: 小程序支持media query切换darkmode

#### Bugfixes
* fix: 修复小程序下按钮组件disabled不生效问题
* fix: 去掉information-bar的变量嵌套引用



### v2.6.1 (2023-06-28)

#### Bugfixes
* fix: 按钮背景色css变量更新为less变量



### v2.6.0 (2023-06-21)

#### Features
* feat: 新增informationBar组件
* feat: cell组件支持上下结构
* feat: actionsheet菜单新增副标题
* feat: form新增weui-form__bd和weui-form__ft结构，布局向后兼容
* feat: form新增底部悬浮效果
* feat: button UI升级



### v2.5.16 (2023-01-16)

#### Features
* feat: 升级picker样式
* feat: 升级loading样式

#### Bugfixes
* fix: 统一“正在加载”文案



### v2.5.15 (2022-12-26)

#### Features
* feat: 加入色板less变量
* feat: 色板新增红橙色

#### Bugfixes
* fix: 弹窗标题缺少默认字体颜色
* fix: 半屏弹窗demo动画效果
* fix: weui-animate的keyframe名增加weui前缀



### v2.5.14 (2022-09-16)

#### Bugfixes
* fix: 半屏组件的关闭图标兼容旧dom
* fix: 修复小程序半屏demo的无障碍



### v2.5.13 (2022-09-15)

#### Bugfixes
* fix: 修复ios16下text-align-last导致的问题



### v2.5.12 (2022-09-06)

#### Bugfixes
* fix: toast、toptips层级调整至5500



### v2.5.11 (2022-08-16)

#### Features
* feat: 小程序新增slide半屏
* feat: 优化slide半屏、loadmore、button组件的实现


#### Bugfixes
* fix: 去掉弹窗适配无障碍focus时带系统默认聚焦样式



### v2.5.10 (2022-08-02)

#### Features
* feat: uploader组件的上传图标大小从固定尺寸改为相对尺寸

#### Bugfixes
* fix: 优化半屏弹窗样式代码



### v2.5.9 (2022-06-16)

#### Features
* feat: 升级toast组件、article组件、msg组件UI
* feat: 增加css变量注册容器`.wx-root`

#### Bugfixes
* fix: 修复flex布局



### v2.5.8 (2022-05-27)

#### Bugfixes
* fix: 优化默认字体序列



### v2.5.7 (2022-05-27)

#### Bugfixes
* fix: 默认字体名更新
* fix: 按钮禁止长按



### v2.5.6 (2022-04-06)

#### Features
* feat: 新增单选框、复选框、开关组件的置灰态

#### Bugfixes
* fix: 优化半屏弹窗按钮布局，保证向前兼容
* fix: 修复steps组件缺少初始化状态问题、新增icon-prev状态
* fix: 优化底部悬浮按钮间距实现方式
* fix: 去掉无用的weui-cell_access背景颜色点击态实现
* fix: 优化example体验



### v2.5.5 (2022-03-03)

#### Features
* feat: 增加步骤条组件
* feat: weui-link增加点击态

#### Bugfixes
* fix: 修复actionsheet头部上下安全距离
* fix: 修复navbar无障碍选中提示
* fix: 调整输入框清除按钮间距



### v2.5.4 (2021-12-10)

#### Bugfixes
* fix: 修复若干UI细节问题
* fix: 优化悬浮按钮、form、panel、cell、msg、select、switch、textarea、agree组件示例



### v2.5.3 (2021-12-08)

#### Features
* feat: 升级form组件UI
* feat: 升级switch组件UI
* feat: 升级articleUI、新增列表类型
* feat: cell组件新增副标题
* feat: 半屏弹窗新增下拉关闭图标（见样式二）

#### Bugfixes
* fix: 修复表单weui-agree组件对齐问题



### v2.5.2 (2021-11-29)

#### Features
* feat: 升级article组件UI
* feat: 底部悬浮按钮、半屏弹窗按钮支持垂直布局
* feat: 新增transition模态显示动画

#### Bugfixes
* fix: 表单组件验证码同意协议复选框优化无障碍体验
* fix: navigation组件返回按钮热区不足44px
* fix: 调整gallery组件底部安全间距、删除按钮增加点击态
* fix: 修复小程序slideview按钮宽度问题
* fix: actionsheet组件适配刘海屏
* fix: a11y热区去掉冗余背景声明
* fix: 修复图标按钮整合
* fix: 表单同意协议居中布局
* fix: 提高weui icon组件的选择器权重，用来规避和weui-icon混搭使用的权重问题



### v2.5.1 (2021-10-11)

#### Features
* feat: 新增关怀模式色板
* feat: 半屏弹窗组件UI升级
* feat: 升级按钮loading UI
* feat: msg组件标题字重调整
* feat: article新增无障碍整合焦点例子


### v2.5.0 (2021-09-17)

#### Features
* feat: WeUI组件库适配无障碍
* feat: WeUI组件库适配大字号
* feat: 新增无障碍、热区工具类(见`/style/base/a11y.less`)
* feat: 按钮组件UI升级：高度、圆角属性
* feat: 新增底部悬浮按钮
* feat: 统一各平台组件样式（涉及dialog、actionsheet）
* feat: 小程序构建新增适老化脚本
* feat: 构建支持Node.js 12+的环境

#### Bugfixes
* fix: msg组件extra-area新增水平间距
* fix: 修复navigation-bar的loading对齐问题
* fix: 修复toast文字场景默认宽度问题



### v2.4.4 (2021-03-23)

#### Features
* feat: 升级半屏弹窗组件UI
* feat: 升级msg组件UI

#### Bugfixes
* fix: 修复半屏弹窗单个按钮的布局问题
* fix: 修复actionsheet组件取消按钮字体颜色问题
* fix: 调整上传组件边距



### v2.4.3 (2021-02-01)

#### Features
* feat: 调整Loading组件UI
* feat: Toast组件新增长文案场景、加载中场景升级UI
* feat: 新增msg自定义区域，可加key-value、普通提示、cell等列表
* feat: 表单状态新增当前位置报错场景
* feat: 表单组件新增跳转列表项
* feat: 新增链接点击态色值变量
* feat: 更新License年份 & 提供rpx版本

#### Bugfixes
* fix: 修复Input组件placeholde字体颜色
* fix: 修复rpx版本下的demo展示问题



### v2.4.2 (2020-11-25)

#### Bugfixes
* fix: 把weui和weui-wxss的changelog对齐现网版本
* fix: 修复picker组件darkmode下的背景色适配问题
* fix: 修复toast组件的旧版loading图标大小
* fix: 修复msg组件英文文本词间断行问题



### v2.4.1 (2020-11-05)

#### Features
* feat: 升级toast组件的UI
* feat: 新增圆圈loading组件
* feat: 升级button组件的loading UI

#### Bugfixes
* fix: msg组件文本区域新增英文词间折行加破折号的效果


### v2.4.0 (2020-06-17)

#### Features
* feat: 升级色板配色


### v2.3.0 (2020-03-04)

#### Features
* feat: 兼容小程序的navigator标签
* feat: input的placeholder更改颜色
* feat: 更改cell的点击态背景颜色
* feat: 适配小程序的darkmode

#### Bugfixes
* fix: msg的title没有适配黑暗模式
* fix: input placeholder的样式
* fix: fix default 按钮的点击态
* fix: form表单的验证码样式
* fix: darkmode右滑组件、修复图片预览组件刘海屏安全间距问题
* fix: 搜索框的文本没有适配黑暗模式


#### v2.0.1 (2019-10-23)
- 【增强】 增加组件 form 表单页
- 【增强】 增加组件 actionsheet 模拟原生actionsheet
- 【优化】 优化 slideview 右滑操作UI
- 【修复】 修复在[weui-miniprogram](https://github.com/wechat-miniprogram/weui-miniprogram) v0.2下的一些兼容问题


#### v 2.0.0 (2019-08-01)

- 【同步weui】 颜色规范、字体大小规范、间距规范对齐微信7.0新视觉风格
- 【同步weui】 更新weui-cell、weui-uploader、weui-article、weui-footer、weui-msg、weui-panel、weui-search-bar等组件的UI
- 【增强】 增加组件 slideview 右滑操作 
- 【增强】 增加组件 gallery 模拟原生全屏预览 
- 【增强】 增加组件 loading 加载中 
- 【增强】 增加组件 dialog 模拟原生弹窗 
- 【增强】 增加组件 half-screen-dialog 半屏弹窗
- 【增强】 增加组件 navigation-bar 模拟原生顶部导航条
- 【增强】 增加组件 tabbar 模拟原生底部tab
- 【优化】 废弃组件 navbar

#### v 1.1.1 (2017-01-18)

- 【同步weui】 增加扩展类.weui-loading_transparent
- 【同步weui】 更新普通警告图标颜色
- 【修复】 fix navbar的activeIndex #20

#### v 1.1.0 (2016-12-06)

- 【优化】 跟随weui的版本号
- 【优化】 loading的base64
- 【增强】 增加组件 badge 徽章

#### v0.1.1 (2016-11-10)

- 【修复】 navbar的样式按小程序的规范来重新编写

#### v0.1.0 (2016-11-10)

初始发布

- Initial release
