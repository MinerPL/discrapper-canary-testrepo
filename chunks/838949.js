"use strict";
n.r(t), n("733860");
var s = n("735250"),
  a = n("470079"),
  l = n("780384"),
  i = n("481060"),
  r = n("197344"),
  o = n("526167"),
  u = n("281979"),
  c = n("293716"),
  d = n("810090"),
  f = n("981631"),
  m = n("461113"),
  p = n("542943"),
  g = n("423028"),
  x = n("528512"),
  h = n("184984"),
  b = n("646562");

function N(e) {
  let {
    movDark: t = u,
    movLight: n = c,
    mp4Dark: a = m,
    mp4Light: l = x,
    pngDark: i = p,
    pngLight: r = h,
    webmDark: d = g,
    webmLight: N = b
  } = e, T = (0, o.getChromeVersion)(), v = [(0, s.jsx)("source", {
    src: a,
    type: "video/mp4"
  }, "mp4"), (0, s.jsx)("img", {
    alt: "",
    src: i
  }, "png")], S = [(0, s.jsx)("source", {
    src: l,
    type: "video/mp4"
  }, "mp4"), (0, s.jsx)("img", {
    alt: "",
    src: r
  }, "png")];
  return (T > 52 || -1 === T) && (v.unshift((0, s.jsx)("source", {
    src: d,
    type: "video/webm"
  }, "webm")), S.unshift((0, s.jsx)("source", {
    src: N,
    type: "video/webm"
  }, "webm"))), (0, o.supportsHEVCAlpha)() && (v.unshift((0, s.jsx)("source", {
    src: t,
    type: "video/mp4"
  }, "hevc")), S.unshift((0, s.jsx)("source", {
    src: n,
    type: "video/mp4"
  }, "hevc"))), {
    [f.ThemeTypes.DARK]: v,
    [f.ThemeTypes.LIGHT]: S
  }
}
let T = r.default.getAppSpinnerSources(),
  v = null != T ? N(T) : null,
  S = N({});
t.default = e => {
  var t;
  let {
    loop: n = !0,
    autoPlay: r = !0,
    setRef: o,
    className: u,
    onReady: c
  } = e, {
    theme: m
  } = (0, i.useThemeContext)(), {
    reducedMotion: p
  } = a.useContext(i.AccessibilityPreferencesContext), g = S;
  null != v && (g = v);
  let x = null !== (t = g[(0, l.isThemeDark)(m) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT]) && void 0 !== t ? t : g[f.ThemeTypes.DARK];
  return (0, s.jsx)(d.default, {
    ref: o,
    onLoadedData: c,
    className: u,
    loop: !p.enabled && n,
    autoPlay: !p.enabled && r,
    playsInline: !0,
    "data-testid": "app-spinner",
    children: x
  }, m)
}