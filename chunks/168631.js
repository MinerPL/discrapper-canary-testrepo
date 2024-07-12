n.d(t, {
  J2: function() {
return h;
  },
  V3: function() {
return f;
  },
  ZB: function() {
return I;
  },
  e4: function() {
return T;
  },
  fq: function() {
return E;
  },
  lM: function() {
return g;
  },
  wu: function() {
return m;
  }
}), n(47120);
var r = n(470079),
  i = n(392711),
  a = n(866442),
  o = n(399606),
  s = n(692547),
  l = n(780384),
  u = n(607070),
  c = n(44315),
  d = n(564334),
  _ = n(981631);

function E(e) {
  let t = (0, o.e7)([u.Z], () => u.Z.saturation);
  return (0, r.useMemo)(() => null == e ? null : {
overlaySyncedWithUserTheme: s.Z.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
  theme: e,
  saturation: t
}).hsl(),
overlay: s.Z.colors.PROFILE_GRADIENT_OVERLAY.resolve({
  theme: e,
  saturation: t
}).hsl(),
sectionBox: s.Z.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
  theme: e,
  saturation: t
}).hsl(),
messageInputBorder: s.Z.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
  theme: e,
  saturation: t
}).hsl(),
dividerOpacity: e === s.Z.themes.DARK ? 0.24 : 0.12,
noteBackgroundColor: s.Z.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
  theme: e,
  saturation: t
}).hsl(),
profileBodyBackgroundHover: s.Z.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
  theme: e,
  saturation: t
}).hsl(),
rolePillBackgroundColor: s.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
  theme: e,
  saturation: t
}).hsl(),
rolePillBorderColor: s.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
  theme: e,
  saturation: t
}).hsl(),
icon: s.Z.colors.INTERACTIVE_NORMAL.resolve({
  theme: e,
  saturation: t
}).hsl()
  }, [
e,
t
  ]);
}

function f(e) {
  return null == e ? null : (0, a.Bd)(e) > 0.5 ? _.BRd.DARK : _.BRd.LIGHT;
}

function h(e, t, n) {
  let r = n / 100,
i = 1 - r;
  return [
Math.round(e[0] * i + t[0] * r),
Math.round(e[1] * i + t[1] * r),
Math.round(e[2] * i + t[2] * r)
  ];
}

function p(e, t) {
  let n = (0, a.px)(e);
  if (null == t)
return 0;
  let r = d.Z.parseString(t);
  if (null == r)
return 0;
  let i = [
  r.red,
  r.green,
  r.blue
],
o = [
  n[0],
  n[1],
  n[2]
],
s = r.alpha,
[l, u, c] = i.map((e, t) => Math.floor(s * e + (1 - s) * o[t]));
  return (0, a.QT)('rgba('.concat(l, ', ').concat(u, ', ').concat(c, ')'));
}

function m(e, t, n) {
  let r = E(e);
  return null == r || null == t ? null : p(t, n ? r.overlaySyncedWithUserTheme : r.overlay);
}
let I = (0, i.memoize)(e => {
  let t = (0, l.Qg)(e, {
base: '#ffffff',
contrastRatio: l.S3.HighContrastText
  });
  return (0, a._i)(t);
}, e => e);

function T(e, t) {
  let n = E(e);
  return null != n && null != t ? p(t, null == n ? void 0 : n.messageInputBorder) : null;
}

function g(e, t) {
  let n = (0, c.Sl)(_.Ilk.WHITE_500).hex;
  return (0, l.wj)(e) ? (0, a._i)(n) : null != t ? I(t) : null;
}