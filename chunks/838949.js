t(733860);
var l = t(735250),
  i = t(470079),
  a = t(780384),
  r = t(481060),
  s = t(197344),
  o = t(526167),
  u = t(281979),
  c = t(293716),
  d = t(810090),
  p = t(981631),
  m = t(461113),
  h = t(542943),
  f = t(423028),
  x = t(528512),
  _ = t(184984),
  g = t(646562);

function N(e) {
  let {
movDark: n = u,
movLight: t = c,
mp4Dark: i = m,
mp4Light: a = x,
pngDark: r = h,
pngLight: s = _,
webmDark: d = f,
webmLight: N = g
  } = e, v = (0, o.vu)(), E = [
(0, l.jsx)('source', {
  src: i,
  type: 'video/mp4'
}, 'mp4'),
(0, l.jsx)('img', {
  alt: '',
  src: r
}, 'png')
  ], Z = [
(0, l.jsx)('source', {
  src: a,
  type: 'video/mp4'
}, 'mp4'),
(0, l.jsx)('img', {
  alt: '',
  src: s
}, 'png')
  ];
  return (v > 52 || -1 === v) && (E.unshift((0, l.jsx)('source', {
src: d,
type: 'video/webm'
  }, 'webm')), Z.unshift((0, l.jsx)('source', {
src: N,
type: 'video/webm'
  }, 'webm'))), (0, o.rO)() && (E.unshift((0, l.jsx)('source', {
src: n,
type: 'video/mp4'
  }, 'hevc')), Z.unshift((0, l.jsx)('source', {
src: t,
type: 'video/mp4'
  }, 'hevc'))), {
[p.BRd.DARK]: E,
[p.BRd.LIGHT]: Z
  };
}
let v = s.Z.getAppSpinnerSources(),
  E = null != v ? N(v) : null,
  Z = N({});
n.Z = e => {
  var n;
  let {
loop: t = !0,
autoPlay: s = !0,
setRef: o,
className: u,
onReady: c
  } = e, {
theme: m
  } = (0, r.useThemeContext)(), {
reducedMotion: h
  } = i.useContext(r.AccessibilityPreferencesContext), f = Z;
  null != E && (f = E);
  let x = null !== (n = f[(0, a.wj)(m) ? p.BRd.DARK : p.BRd.LIGHT]) && void 0 !== n ? n : f[p.BRd.DARK];
  return (0, l.jsx)(d.Z, {
ref: o,
onLoadedData: c,
className: u,
loop: !h.enabled && t,
autoPlay: !h.enabled && s,
playsInline: !0,
'data-testid': 'app-spinner',
children: x
  }, m);
};