n.d(t, {
  L: function() {
return f;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(906280),
  l = n.n(s),
  u = n(186325),
  c = n(390507),
  d = n(679400),
  _ = n(580747),
  E = n(963191);
let f = i.forwardRef(function(e, t) {
  let {
color: a,
src: s,
size: f = 'md',
width: h,
height: p,
className: m,
initialAnimation: I,
markers: T
  } = e, [g, S] = i.useState(null), A = i.useRef(null), N = i.useRef(null), v = i.useRef(null), O = 'custom' === f ? {
width: h,
height: p
  } : (0, c.m)(f), R = !(0, _.Z)('lottie_hover_multiple_loop'), C = i.useContext(u.S).reducedMotion.enabled, {
enabled: y
  } = d.Z.useExperiment({
location: 'LottieIcon web entry point'
  }), D = C || !y;
  return i.useImperativeHandle(t, () => ({
play: e => {
  if (null != v.current) {
    if (N.current = e, D) {
      let t = T[e];
      v.current.resetSegments(!0), v.current.setSegment(t.start + t.duration, t.start + t.duration), v.current.stop();
    } else
      v.current.setLoop(!R && e.includes('hover')), v.current.resetSegments(!0), v.current.playSegments([
        T[e].start,
        T[e].start + T[e].duration
      ], !0);
  }
},
stop: () => {
  if (null == v.current || D)
    return;
},
stopIfPlaying: e => {
  null != v.current && !D && N.current === e && (v.current.resetSegments(!0), v.current.setSegment(T[e].start, T[e].start), v.current.stop());
}
  }), [
D,
R,
T
  ]), i.useEffect(() => {
null == g && s().then(e => S(e.default));
  }, [
g,
s
  ]), i.useEffect(() => (n.e('23755').then(n.t.bind(n, 500923, 23)).then(e => {
var t;
let n, {
    default: r
  } = e,
  i = null !== (t = N.current) && void 0 !== t ? t : I;
if (null != i && null != T[i]) {
  let e = T[i];
  n = [
    e.start,
    e.start + e.duration
  ];
}
null != A.current && (v.current = r.loadAnimation({
  container: A.current,
  renderer: 'svg',
  loop: !1,
  autoplay: !1,
  animationData: l()(g),
  initialSegment: n
}));
  }), () => {
var e;
null === (e = v.current) || void 0 === e || e.destroy();
  }), [
g,
I,
T
  ]), (0, r.jsx)('div', {
style: {
  '--__lottieIconColor': null != a && 'string' == typeof a ? a : null == a ? void 0 : a.css,
  display: 'flex',
  ...O
},
className: o()(E.lottieIcon, m),
ref: A
  });
});