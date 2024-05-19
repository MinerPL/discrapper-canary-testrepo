"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var a = l("735250");
l("470079");
var n = l("120356"),
  s = l.n(n),
  r = l("481060"),
  i = l("154921"),
  d = l("58537");

function u(e) {
  let {
    steps: t,
    stepIndex: l,
    onClick: n
  } = e;
  return (0, a.jsx)("div", {
    className: d.container,
    children: t.map((e, t) => {
      let u = l === t;
      return (0, a.jsxs)(r.Clickable, {
        onClick: () => n(t),
        className: d.stepContainer,
        children: [(0, a.jsx)("div", {
          className: s()(d.progressBar, {
            [d.selectedProgressBar]: u
          })
        }), (0, a.jsx)(i.default, {
          color: u ? i.default.Colors.BRAND : i.default.Colors.MUTED,
          size: i.default.Sizes.SIZE_12,
          children: e
        })]
      }, e)
    })
  })
}