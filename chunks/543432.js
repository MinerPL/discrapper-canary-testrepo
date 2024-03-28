"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("158010"),
  i = n("4311");

function r(e) {
  let {
    userCount: t
  } = e;
  return (0, l.jsxs)("div", {
    className: i.container,
    children: [(0, l.jsx)(s.default, {
      width: 12,
      height: 12,
      className: i.peopleIcon
    }), (0, l.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      className: i.userCountText,
      children: t
    })]
  })
}