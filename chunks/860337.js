"use strict";
r.r(t), r.d(t, {
  default: function() {
    return h
  }
});
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("481060"),
  s = r("931240"),
  c = r("207796"),
  d = r("696310"),
  u = r("893048");

function h() {
  let e = i.useRef(null);
  return (0, a.jsxs)("div", {
    ref: e,
    className: n()(u.panel, d.panel),
    children: [(0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      onClick: s.resetClanSetup,
      children: "Reset Every Clan Setup State"
    }), (0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      onClick: c.resetClanDiscovery,
      children: "Reset Clan Discovery State"
    })]
  })
}