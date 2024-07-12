t(733860);
var l = t(735250),
  r = t(470079),
  a = t(780384),
  i = t(481060),
  s = t(197344),
  o = t(526167),
  u = t(281979),
  c = t(293716),
  d = t(810090),
  p = t(981631),
  x = t(461113),
  m = t(542943),
  h = t(423028),
  f = t(528512),
  N = t(184984),
  g = t(646562);

function j(e) {
  let {
movDark: n = u,
movLight: t = c,
mp4Dark: r = x,
mp4Light: a = f,
pngDark: i = m,
pngLight: s = N,
webmDark: d = h,
webmLight: j = g
  } = e, Z = (0, o.vu)(), v = [
(0, l.jsx)('source', {
  src: r,
  type: 'video/mp4'
}, 'mp4'),
(0, l.jsx)('img', {
  alt: '',
  src: i
}, 'png')
  ], I = [
(0, l.jsx)('source', {
  src: a,
  type: 'video/mp4'
}, 'mp4'),
(0, l.jsx)('img', {
  alt: '',
  src: s
}, 'png')
  ];
  return (Z > 52 || -1 === Z) && (v.unshift((0, l.jsx)('source', {
src: d,
type: 'video/webm'
  }, 'webm')), I.unshift((0, l.jsx)('source', {
src: j,
type: 'video/webm'
  }, 'webm'))), (0, o.rO)() && (v.unshift((0, l.jsx)('source', {
src: n,
type: 'video/mp4'
  }, 'hevc')), I.unshift((0, l.jsx)('source', {
src: t,
type: 'video/mp4'
  }, 'hevc'))), {
[p.BRd.DARK]: v,
[p.BRd.LIGHT]: I
  };
}
let Z = s.Z.getAppSpinnerSources(),
  v = null != Z ? j(Z) : null,
  I = j({});
n.Z = e => {
  var n;
  let {
loop: t = !0,
autoPlay: s = !0,
setRef: o,
className: u,
onReady: c
  } = e, {
theme: x
  } = (0, i.useThemeContext)(), {
reducedMotion: m
  } = r.useContext(i.AccessibilityPreferencesContext), h = I;
  null != v && (h = v);
  let f = null !== (n = h[(0, a.wj)(x) ? p.BRd.DARK : p.BRd.LIGHT]) && void 0 !== n ? n : h[p.BRd.DARK];
  return (0, l.jsx)(d.Z, {
ref: o,
onLoadedData: c,
className: u,
loop: !m.enabled && t,
autoPlay: !m.enabled && s,
playsInline: !0,
'data-testid': 'app-spinner',
children: f
  }, x);
};