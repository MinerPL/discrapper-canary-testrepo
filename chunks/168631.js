"use strict";
n.d(t, {
  J2: function() {
    return T
  },
  V3: function() {
    return I
  },
  ZB: function() {
    return f
  },
  e4: function() {
    return N
  },
  fq: function() {
    return E
  },
  lM: function() {
    return A
  },
  wu: function() {
    return S
  }
}), n(47120);
var i = n(470079),
  r = n(392711),
  s = n(866442),
  o = n(399606),
  a = n(692547),
  l = n(780384),
  u = n(607070),
  _ = n(44315),
  d = n(564334),
  c = n(981631);

function E(e) {
  let t = (0, o.e7)([u.Z], () => u.Z.saturation);
  return (0, i.useMemo)(() => null == e ? null : {
    overlaySyncedWithUserTheme: a.Z.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    overlay: a.Z.colors.PROFILE_GRADIENT_OVERLAY.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    sectionBox: a.Z.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    messageInputBorder: a.Z.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    dividerOpacity: e === a.Z.themes.DARK ? .24 : .12,
    noteBackgroundColor: a.Z.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    profileBodyBackgroundHover: a.Z.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    rolePillBackgroundColor: a.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    rolePillBorderColor: a.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    icon: a.Z.colors.INTERACTIVE_NORMAL.resolve({
      theme: e,
      saturation: t
    }).hsl()
  }, [e, t])
}

function I(e) {
  return null == e ? null : (0, s.Bd)(e) > .5 ? c.BRd.DARK : c.BRd.LIGHT
}

function T(e, t, n) {
  let i = n / 100,
    r = 1 - i;
  return [Math.round(e[0] * r + t[0] * i), Math.round(e[1] * r + t[1] * i), Math.round(e[2] * r + t[2] * i)]
}

function h(e, t) {
  let n = (0, s.px)(e);
  if (null == t) return 0;
  let i = d.Z.parseString(t);
  if (null == i) return 0;
  let r = [i.red, i.green, i.blue],
    o = [n[0], n[1], n[2]],
    a = i.alpha,
    [l, u, _] = r.map((e, t) => Math.floor(a * e + (1 - a) * o[t]));
  return (0, s.QT)("rgba(".concat(l, ", ").concat(u, ", ").concat(_, ")"))
}

function S(e, t, n) {
  let i = E(e);
  return null == i || null == t ? null : h(t, n ? i.overlaySyncedWithUserTheme : i.overlay)
}
let f = (0, r.memoize)(e => {
  let t = (0, l.Qg)(e, {
    base: "#ffffff",
    contrastRatio: l.S3.HighContrastText
  });
  return (0, s._i)(t)
}, e => e);

function N(e, t) {
  let n = E(e);
  return null != n && null != t ? h(t, null == n ? void 0 : n.messageInputBorder) : null
}

function A(e, t) {
  let n = (0, _.Sl)(c.Ilk.WHITE_500).hex;
  return (0, l.wj)(e) ? (0, s._i)(n) : null != t ? f(t) : null
}