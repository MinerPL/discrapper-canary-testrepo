"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("702976");
var l = s("37983");
s("884691");
var a = s("446674"),
  i = s("2760"),
  r = s("713135"),
  o = s("568719");

function n(e) {
  var t;
  let {
    user: s
  } = e, n = null === (t = (0, a.useStateFromStores)([r.default], () => r.default.getUserProfile(s.id))) || void 0 === t ? void 0 : t.application;
  return (0, l.jsx)(i.default, {
    flags: null == n ? void 0 : n.flags,
    listScrollerStyle: o.listScroller
  })
}