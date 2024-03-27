"use strict";
n.r(t), n.d(t, {
  uid: function() {
    return s
  },
  useUID: function() {
    return r
  },
  UID: function() {
    return o
  }
});
var i = n("995008"),
  a = n.n(i),
  l = n("775560");
let s = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
    return a(e)
  },
  r = () => (0, l.useLazyValue)(() => s()),
  o = e => {
    let {
      children: t
    } = e;
    return t(r())
  }