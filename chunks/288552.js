"use strict";
n.r(t), n.d(t, {
  FloatingActionButton: function() {
    return i
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("258568");
let i = e => {
  let {
    text: t,
    icon: n,
    onClick: i
  } = e;
  return (0, s.jsxs)(a.Button, {
    className: l.button,
    innerClassName: l.buttonInner,
    onClick: i,
    children: [(0, s.jsx)(n, {}), (0, s.jsx)(a.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: t
    })]
  })
}