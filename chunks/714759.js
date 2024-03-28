"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("689938"),
  i = n("641379");
let r = Math.ceil(2 * Math.PI * 20);
t.default = e => {
  let {
    total: t,
    used: n
  } = e, o = Math.max(0, Math.min(1, n / t)), u = "".concat(Math.floor(100 * o), "%");
  return (0, a.jsx)(s.Tooltip, {
    text: l.default.Messages.APPLICATION_INSTALLATION_SPACE_USED.format({
      used: u
    }),
    children: e => {
      var t;
      return (0, a.jsxs)("div", {
        className: i.wrapper,
        role: "progressbar",
        "aria-label": l.default.Messages.APPLICATION_INSTALLATION_SPACE_USED.format({
          used: u
        }),
        ...e,
        children: [(0, a.jsxs)("svg", {
          viewBox: "25 25 50 50",
          className: i.svg,
          "aria-hidden": !0,
          children: [(0, a.jsx)("circle", {
            className: i.background,
            cx: "50",
            cy: "50",
            r: 20
          }), (0, a.jsx)("circle", {
            className: i.foreground,
            cx: "50",
            cy: "50",
            r: 20,
            stroke: (t = o, "rgb(".concat(Math.round(-85 * t + 199), ", ").concat(Math.round(-71 * t + 208), ", ").concat(Math.round(-22 * t + 240), ")")),
            strokeDasharray: function(e) {
              let t = Math.floor(r * e);
              return "".concat(t, ", ").concat(r)
            }(o)
          })]
        }), (0, a.jsx)("aside", {
          className: i.usageInfo,
          "aria-hidden": !0,
          children: u
        })]
      })
    }
  })
}