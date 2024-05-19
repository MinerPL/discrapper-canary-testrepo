"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var l = s("689938"),
  n = s("444981");

function i(e) {
  let {
    showDirtyIndicator: t
  } = e;
  return t ? (0, a.jsxs)("div", {
    className: n.container,
    children: [l.default.Messages.GUILD_TEMPLATES, (0, a.jsx)("div", {
      className: n.dot
    })]
  }) : (0, a.jsx)(a.Fragment, {
    children: l.default.Messages.GUILD_TEMPLATES
  })
}