"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("285952"),
  i = n("202290");

function r(e) {
  let {
    icon: t,
    onClick: n,
    label: r
  } = e;
  return (0, a.jsx)(l.Button, {
    look: l.Button.Looks.BLANK,
    size: l.Button.Sizes.MIN,
    className: i.button,
    onClick: n,
    children: (0, a.jsxs)(s.default, {
      align: s.default.Align.CENTER,
      children: [(0, a.jsx)("div", {
        className: i.buttonIcon,
        children: t
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "none",
        children: r
      })]
    })
  })
}