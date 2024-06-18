"use strict";
t.d(s, {
  F: function() {
    return u
  }
});
var n = t(735250),
  a = t(470079),
  i = t(481060),
  l = t(906732),
  r = t(963249),
  o = t(474936),
  c = t(289604);
let u = e => {
  let {
    text: s
  } = e, {
    analyticsLocations: t
  } = (0, l.ZP)(), u = a.useRef(null);
  return (0, n.jsx)(i.Clickable, {
    className: c.subscribeNow,
    innerRef: u,
    onClick: () => {
      (0, r.Z)({
        subscriptionTier: o.Si.TIER_2,
        analyticsLocations: t,
        returnRef: u
      })
    },
    children: s
  })
}