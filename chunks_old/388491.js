"use strict";
r.r(t), r.d(t, {
  useProfileThemeValues: function() {
    return h
  },
  getProfileTheme: function() {
    return E
  },
  getValueInColorGradientByPercentage: function() {
    return R
  },
  useAvatarBorderColor: function() {
    return _
  },
  calculateButtonColor: function() {
    return O
  },
  useMessageInputBorderColor: function() {
    return T
  },
  useDividerColor: function() {
    return C
  }
}), r("222007");
var l = r("884691"),
  n = r("917351"),
  o = r("509043"),
  u = r("65597"),
  a = r("669491"),
  s = r("819855"),
  i = r("206230"),
  c = r("449918"),
  f = r("172182"),
  d = r("49111");

function h(e) {
  let t = (0, u.useStateFromStores)([i.default], () => i.default.saturation);
  return (0, l.useMemo)(() => null == e ? null : {
    overlaySyncedWithUserTheme: a.default.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    overlay: a.default.colors.PROFILE_GRADIENT_OVERLAY.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    sectionBox: a.default.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    messageInputBorder: a.default.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    dividerOpacity: e === a.default.themes.DARK ? .24 : .12,
    noteBackgroundColor: a.default.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    profileBodyBackgroundHover: a.default.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    rolePillBackgroundColor: a.default.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    rolePillBorderColor: a.default.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    icon: a.default.colors.INTERACTIVE_NORMAL.resolve({
      theme: e,
      saturation: t
    }).hsl()
  }, [e, t])
}

function E(e) {
  if (null == e) return null;
  let t = (0, o.getDarkness)(e);
  return t > .5 ? d.ThemeTypes.DARK : d.ThemeTypes.LIGHT
}

function R(e, t, r) {
  let l = r / 100,
    n = 1 - l;
  return [Math.round(e[0] * n + t[0] * l), Math.round(e[1] * n + t[1] * l), Math.round(e[2] * n + t[2] * l)]
}

function I(e, t) {
  let r = (0, o.int2rgbArray)(e);
  if (null == t) return 0;
  let l = f.default.parseString(t);
  if (null == l) return 0;
  let n = [l.red, l.green, l.blue],
    u = [r[0], r[1], r[2]],
    a = l.alpha,
    [s, i, c] = n.map((e, t) => Math.floor(a * e + (1 - a) * u[t]));
  return (0, o.rgb2int)("rgba(".concat(s, ", ").concat(i, ", ").concat(c, ")"))
}

function _(e, t, r) {
  let l = h(e);
  return null == l || null == t ? null : I(t, r ? l.overlaySyncedWithUserTheme : l.overlay)
}
let O = (0, n.memoize)(e => {
  let t = (0, s.getContrastingColor)(e, {
    base: "#ffffff",
    contrastRatio: s.WCAGContrastRatios.HighContrastText
  });
  return (0, o.hex2int)(t)
}, e => e);

function T(e, t) {
  let r = h(e);
  return null != r && null != t ? I(t, null == r ? void 0 : r.messageInputBorder) : null
}

function C(e, t) {
  let r = (0, c.useColorValue)(d.Color.WHITE_500).hex;
  return (0, s.isThemeDark)(e) ? (0, o.hex2int)(r) : null != t ? O(t) : null
}