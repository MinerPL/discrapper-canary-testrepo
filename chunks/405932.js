"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var r = n("225389"),
  a = n("77078"),
  l = n("352969"),
  i = function(e) {
    let {
      message: t
    } = e;
    return (0, s.jsxs)("div", {
      className: l.container,
      children: [(0, s.jsx)(r.CircleInformationIcon, {
        className: l.icon,
        width: 20,
        height: 20,
        color: a.tokens.colors.TEXT_WARNING
      }), (0, s.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-muted",
        children: t
      })]
    })
  }