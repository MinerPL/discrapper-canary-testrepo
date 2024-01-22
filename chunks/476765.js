"use strict";
n.r(t), n.d(t, {
  uid: function() {
    return s
  },
  useUID: function() {
    return i
  },
  UID: function() {
    return u
  }
});
var l = n("995008"),
  a = n.n(l),
  r = n("775560");
let s = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
    return a(e)
  },
  i = () => (0, r.useLazyValue)(() => s()),
  u = e => {
    let {
      children: t
    } = e;
    return t(i())
  }