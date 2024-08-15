n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(780384),
  s = n(607070),
  o = n(514361),
  l = n(57132),
  u = n(210887),
  c = n(231338);

function d(e) {
  let {
children: t
  } = e, n = (0, i.e7)([u.Z], () => u.Z.theme), d = (0, l.SO)(), _ = (0, i.e7)([o.Z], () => o.Z.gradientPreset), {
saturation: E,
contrast: f
  } = (0, i.cj)([s.Z], () => ({
saturation: s.Z.saturation,
contrast: s.Z.contrast
  })), h = 0;
  return d && (h = (0, a.Od)(h, a.bg.MOBILE_REDESIGN_ENABLED)), null != _ && (h = _.theme === c.BR.LIGHT ? (0, a.Od)(h, a.bg.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, a.Od)(h, a.bg.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== E && (h = (0, a.Od)(h, a.bg.REDUCE_SATURATION_ENABLED)), (0, r.jsx)(a.wM, {
theme: n,
flags: h,
saturation: E,
contrast: f,
children: t
  });
}