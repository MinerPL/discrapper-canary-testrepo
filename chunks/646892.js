"use strict";
t.d(s, {
  Z: function() {
    return u
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(442837),
  r = t(481060),
  o = t(607070),
  c = t(307537),
  d = t(59072);

function u(e) {
  let {
    className: s,
    shouldShine: t = !0,
    size: i = 14
  } = e, u = (0, a.e7)([o.Z], () => o.Z.useReducedMotion);
  return (0, n.jsxs)("div", {
    className: l()([d.guildProductRoleIcon, s]),
    children: [(0, n.jsx)(c.Z, {
      height: i,
      width: i
    }), (0, n.jsx)(r.Shine, {
      className: d.shine,
      shinePaused: u || !t,
      shineSize: r.ShinyButton.ShineSizes.SMALL
    })]
  })
}