"use strict";
s.r(t), s.d(t, {
  uid: function() {
    return a
  },
  useUID: function() {
    return r
  },
  UID: function() {
    return o
  }
});
var n = s("995008"),
  l = s.n(n),
  i = s("775560");
let a = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
    return l(e)
  },
  r = () => (0, i.useLazyValue)(() => a()),
  o = e => {
    let {
      children: t
    } = e;
    return t(r())
  }