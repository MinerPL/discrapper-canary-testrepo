"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var l = s("120356"),
  n = s.n(l),
  i = s("442837"),
  r = s("607070"),
  o = s("976644"),
  d = s("307537"),
  u = s("85853");

function c(e) {
  let {
    className: t,
    shouldShine: s = !0,
    size: l = 14
  } = e, c = (0, i.useStateFromStores)([r.default], () => r.default.useReducedMotion);
  return (0, a.jsxs)("div", {
    className: n()([u.guildProductRoleIcon, t]),
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