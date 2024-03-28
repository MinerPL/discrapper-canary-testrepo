"use strict";
l.r(t), l.d(t, {
  InfoBoxLooks: function() {
    return s
  },
  default: function() {
    return S
  }
});
var a, s, n = l("735250");
l("470079");
var i = l("803997"),
  r = l.n(i),
  u = l("481060"),
  o = l("507893"),
  d = l("759231"),
  c = l("550565");
(a = s || (s = {})).INFO = "info", a.WARNING = "warning";
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
    look: a = "info"
  } = e, s = m[a];
  return (0, n.jsxs)("div", {
    className: r()(c.root, l, f[a]),
    children: [(0, n.jsx)(s, {
      className: c.icon
    }), (0, n.jsx)(u.Text, {
      className: c.text,
      variant: "text-sm/medium",
      color: "text-normal",
      children: t
    })]
  })
}