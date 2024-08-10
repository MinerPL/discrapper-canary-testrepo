a(47120), a(653041);
var n = a(735250),
  l = a(470079),
  i = a(392711),
  r = a(98650),
  o = a(70097),
  s = a(163102);

function u(e) {
  let {
setRef: t,
audioTrackLabel: a,
src: i,
muted: r
  } = e, o = l.useCallback(e => {
t(e, a);
  }, [
t,
a
  ]), u = l.useCallback(e => {
Object.values(e.currentTarget.audioTracks).forEach(e => {
  e.enabled = a === e.label;
});
  }, [a]);
  return (0, n.jsx)('audio', {
id: 'ClipsPlayerAudioTrack:'.concat(a),
className: s.hidden,
ref: o,
src: i,
muted: r,
preload: 'auto',
onLoadedMetadata: u
  });
}
t.Z = l.forwardRef(function(e, t) {
  let {
src: a,
audioSrc: d,
applicationAudioEnabled: c,
voiceAudioEnabled: m,
isLoading: p,
onDoneLoading: v,
startTime: f = 0,
endTime: b
  } = e, h = l.useRef({}), [x, g] = l.useState([]), C = l.useRef(!1), _ = l.useCallback(() => {
let e = h.current.main;
if (null == e)
  return;
let t = (0, i.round)(e.currentTime, 3),
  a = (0, i.round)(f, 3);
if (t >= (null != b ? (0, i.round)(b, 3) : (0, i.round)(e.duration, 3)) || t < a) {
  for (let e of Object.values(h.current))
    null != e && (e.currentTime = f);
  return !0;
}
  }, [
f,
b
  ]);
  (0, r.Z)(() => {
C.current && _() && j();
  });
  let j = l.useCallback(() => {
  for (let e of (C.current = !0, _(), Object.values(h.current)))
    null != e && e.play();
}, [_]),
S = l.useCallback(() => {
  for (let e of Object.values(h.current))
    null != e && e.pause();
}, []),
I = l.useCallback(e => {
  var t;
  for (let a of ((null === (t = h.current.main) || void 0 === t ? void 0 : t.paused) && (C.current = !1), Object.values(h.current)))
    null != a && (a.currentTime = e);
}, []),
E = l.useCallback(() => {
  var e;
  (null === (e = h.current.main) || void 0 === e ? void 0 : e.paused) ? j(): S();
}, [
  j,
  S
]),
T = l.useCallback(e => {
  h.current.main = e;
}, []),
y = l.useCallback(e => {
  let t = [];
  for (let a of Object.values(e.currentTarget.audioTracks))
    a.label.includes(':application') ? a.enabled = !0 : a.label.includes(':voice') ? (a.enabled = !1, !t.includes(a.label) && t.push(a.label)) : a.enabled = !1;
  g(t);
}, []),
w = l.useCallback((e, t) => {
  h.current[t] = e;
}, []);
  return (l.useImperativeHandle(t, () => ({
play: j,
seek: I,
pause: S,
videoElement: h.current.main
  })), null == a) ? null : (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(o.Z, {
    onClick: E,
    className: p ? s.hidden : s.displayVideo,
    ref: T,
    src: a,
    muted: !0,
    onLoadedData: v,
    preload: 'auto'
  }),
  (0, n.jsx)('audio', {
    id: 'ClipsPlayerAudioTrack:application',
    src: d,
    muted: !c,
    preload: 'auto',
    className: s.hidden,
    ref: e => w(e, 'application'),
    onLoadedMetadata: y
  }),
  x.map(e => (0, n.jsx)(u, {
    audioTrackLabel: e,
    setRef: w,
    src: d,
    muted: !m
  }, e))
]
  });
});