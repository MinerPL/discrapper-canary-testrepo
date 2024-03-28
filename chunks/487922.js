"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("789020");
var a = s("735250");
s("470079");
var l = s("442837"),
  i = s("954295"),
  o = s("621853"),
  r = s("521170");

function n(e) {
  var t;
  let {
    user: s
  } = e, n = null === (t = (0, l.useStateFromStores)([o.default], () => o.default.getUserProfile(s.id))) || void 0 === t ? void 0 : t.application;
  return (0, a.jsx)(i.default, {
    flags: null == n ? void 0 : n.flags,
    listScrollerStyle: r.listScroller
  })
}