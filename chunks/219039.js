"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("689938"),
  i = s("395169");

function r(e) {
  let {
    count: t
  } = e;
  return (0, a.jsxs)("div", {
    className: i.countContainer,
    children: [(0, a.jsx)("div", {
      className: i.dot
    }), (0, a.jsx)(n.Text, {
      variant: "text-xs/medium",
      color: "header-secondary",
      children: l.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
        count: t
      })
    })]
  })
}