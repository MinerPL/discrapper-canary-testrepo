"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("702976");
var a = s("37983");
s("884691");
var l = s("446674"),
  i = s("2760"),
  o = s("713135"),
  r = s("155502");

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