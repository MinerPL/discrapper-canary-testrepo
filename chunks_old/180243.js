"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("446674"),
  r = s("206230"),
  o = s("181114"),
  d = s("802810"),
  u = s("123651");

function c(e) {
  let {
    className: t,
    shouldShine: s = !0,
    size: l = 14
  } = e, c = (0, i.useStateFromStores)([r.default], () => r.default.useReducedMotion);
  return (0, a.jsxs)("div", {
    className: n([u.guildProductRoleIcon, t]),
    children: [(0, a.jsx)(d.default, {
      height: l,
      width: l
    }), (0, a.jsx)(o.Shine, {
      className: u.shine,
      shinePaused: c || !s,
      shineSize: o.default.ShineSizes.SMALL
    })]
  })
}