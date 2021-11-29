/**
 * mixins 为 Page 增加 mixin 功能
 * 来源：https://segmentfault.com/a/1190000019527762
 */
const originPage = Page;
const originProperties = ['data', 'properties', 'options'];
const originMethods = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap'];

function merge(mixins, options) {
  mixins.forEach((mixin) => {
    if (Object.prototype.toString.call(mixin) !== '[object Object]') {
      throw new Error('mixin 类型必须为对象！');
    }
    for (const [key, value] of Object.entries(mixin)) {
      if (originProperties.includes(key)) {
        options[key] = { ...value, ...options[key] };
      } else if (originMethods.includes(key)) {
        const originFunc = options[key];
        options[key] = function (...args) {
          value.call(this, ...args);
          return originFunc && originFunc.call(this, ...args);
        };
      } else {
        options = { ...mixin, ...options };
      }
    }
  });
  return options;
}

Page = (options) => {
  const { mixins } = options;
  if (Array.isArray(mixins)) {
    delete options.mixins;
    options = merge(mixins, options);
  }
  originPage(options);
};
