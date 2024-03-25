"use strict";
l.r(t), l.d(t, {
  InfoBoxLooks: function() {
    return a
  },
  default: function() {
    return S
  }
});
var n, a, s = l("37983");
l("884691");
var r = l("414456"),
  i = l.n(r),
  u = l("77078"),
  o = l("266926"),
  d = l("423487"),
  c = l("235464");
(n = a || (a = {})).INFO = "info", n.WARNING = "warning";
let f = {
    info: c.info,
    warning: c.warning
  },
  m = {
    info: o.default,
    warning: d.default
  };

function S(e) {
  let {
    children: t,
    className: l,
    look: n = "info"
  } = e, a = m[n];
  return (0, s.jsxs)("div", {
    className: i(c.root, l, f[n]),
    children: [(0, s.jsx)(a, {
      className: c.icon
    }), (0, s.jsx)(u.Text, {
      className: c.text,
      variant: "text-sm/medium",
      color: "text-normal",
      children: t
    })]
  })
}