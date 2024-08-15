t(47120);
var l = t(735250),
  a = t(470079),
  i = t(120356),
  s = t.n(i),
  r = t(392711),
  u = t(780384),
  o = t(481060),
  c = t(410030),
  d = t(44315),
  f = t(293501),
  m = t(943351),
  h = t(231338),
  g = t(499685);
n.Z = a.memo(function(e) {
  let {
file: n,
audio: t,
className: i,
waveformSettings: p
  } = e, [N, _] = a.useState({
width: 0,
height: 0
  }), v = a.useRef(null), D = a.useMemo(() => {
var e;
let n = null !== (e = null == t ? void 0 : t.duration) && void 0 !== e ? e : 1;
return {
  fineTuning: -1,
  fineTuningResolution: n / m.nl.fineTuningScale,
  duration: n,
  ...null != p ? p : {}
};
  }, [
t,
p
  ]), O = (0, f.b1)(n), S = (0, f.NN)(O, v.current, D), x = (0, c.ZP)(), y = (0, d.Sl)((0, u.wj)(x) ? h.Il.PRIMARY_300 : h.Il.PRIMARY_700), E = null == O || null == S, A = (0 === N.width || 0 === N.height || E) && null != n, b = a.useCallback(() => {
null != v.current && _({
  width: v.current.offsetWidth,
  height: v.current.offsetHeight
});
  }, []);
  return a.useEffect(() => {
if (null != v.current) {
  let e = new ResizeObserver((0, r.debounce)(b, 50));
  return e.observe(v.current), () => {
    e.disconnect();
  };
}
  }, [b]), a.useEffect(() => {
if (null == v.current)
  return;
let e = v.current,
  n = e.getContext('2d');
if (null == n)
  return;
let {
  width: t,
  height: l
} = e;
if (0 !== N.width && 0 !== N.height) {
  if (null != S && S.length > 0) {
    let e = t / S.length,
      a = -(e * (m.nl.waveformBarWidth - 1));
    n.clearRect(0, 0, t, l), n.fillStyle = y.hex;
    for (let t = 0; t < S.length; t++) {
      let i = S[t] * l,
        s = t * e + a,
        r = l / 2 - i / 2;
      n.fillRect(s, r, e - a, i);
    }
  }
}
  }, [
y,
N,
x,
S
  ]), (0, l.jsxs)('div', {
className: s()(g.container, i),
children: [
  (0, l.jsx)('canvas', {
    className: g.waveformCanvas,
    ref: v,
    width: 4 * N.width,
    height: 4 * N.height
  }),
  A && (0, l.jsx)('div', {
    className: g.loading,
    children: (0, l.jsx)(o.Spinner, {
      type: o.SpinnerTypes.SPINNING_CIRCLE
    })
  })
]
  });
});