"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(780384),
  o = n(607070),
  a = n(514361),
  l = n(57132),
  u = n(210887),
  _ = n(231338);

function d(e) {
  let {
    children: t
  } = e, n = (0, r.e7)([u.Z], () => u.Z.theme), d = (0, l.SO)(), c = (0, r.e7)([a.Z], () => a.Z.gradientPreset), {
    saturation: E,
    contrast: I
  } = (0, r.cj)([o.Z], () => ({
    saturation: o.Z.saturation,
    contrast: o.Z.contrast
  })), T = 0;
  return d && (T = (0, s.Od)(T, s.bg.MOBILE_REDESIGN_ENABLED)), null != c && (T = c.theme === _.BR.LIGHT ? (0, s.Od)(T, s.bg.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, s.Od)(T, s.bg.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== E && (T = (0, s.Od)(T, s.bg.REDUCE_SATURATION_ENABLED)), (0, i.jsx)(s.wM, {
    theme: n,
    flags: T,
    saturation: E,
    contrast: I,
    children: t
  })
}