n.d(t, {
  Z: function() {
return v;
  }
}), n(642549), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(692547),
  l = n(481060),
  u = n(393238),
  c = n(206678),
  d = n(302221),
  _ = n(328187),
  E = n(607889),
  f = n(94432),
  h = n(515351);
let p = f.e3 / 1000,
  m = 6,
  I = 2,
  T = [
0,
0,
0,
0,
0
  ];

function g(e) {
  let {
showAll: t,
currentTime: n,
duration: r,
numSegments: i
  } = e;
  return t ? i : Math.max(0, Math.round(n / r * i));
}

function S(e) {
  var t, n, r, i, a;
  let {
context: o,
devicePixelRatio: s,
canvasHeight: l,
segmentValue: u,
segmentIndex: c,
constrainMin: d
  } = e, _ = d ? (24 - I) * u + I : 24 * u;
  if (0 !== _)
t = o, n = 6 * c * s, r = (l / 2 - _ / 2) * s, i = _ * s, a = 1 * s, t.moveTo(n, r + a), t.lineTo(n, r + i - a), t.arc(n + a, r + i - a, a, Math.PI, 0, !0), t.lineTo(n + 2 * a, r + a), t.arc(n + a, r + a, a, 0, Math.PI, !0), t.closePath();
}

function A(e, t, n) {
  let [r, a] = i.useState(e), [o, s] = i.useState(e);
  return i.useLayoutEffect(() => {
a(o), s(e);
  }, [
e,
t,
n
  ]), [
r,
o
  ];
}

function N(e, t, n, r) {
  if (null == r)
return [
  t,
  !1
];
  let i = Math.min((n - r) / 200, 1);
  return 1 === i ? [
t,
!1
  ] : [
(0, d.BM)(e, t, i),
!0
  ];
}

function v(e) {
  let {
className: t,
waveform: n,
currentTime: a,
duration: d,
played: I,
playing: v,
onDrag: O,
onDragStart: R,
onDragEnd: C
  } = e, {
ref: y,
width: D
  } = (0, u.Z)(), L = i.useMemo(() => {
var e;
let t;
return Math.floor(((t = (e = d) <= p ? 40 : e >= 45 ? 294 : (Math.min(e, 45) - p) / (45 - p) * 254 + 40) + 4) / m) * m - 4;
  }, [d]), b = i.useRef(), M = function(e, t) {
let n = i.useMemo(() => function(e) {
    let t;
    if (null == e)
      return;
    try {
      t = window.atob(e);
    } catch (e) {
      return;
    }
    let n = [];
    for (let e = 0; e < t.length; e++)
      n[e] = t.charCodeAt(e) / f.Xi;
    return n;
  }(e), [e]),
  r = i.useMemo(() => function(e) {
    if (null != e)
      return Math.floor((e + 4) / 6);
  }(t), [t]);
return i.useMemo(() => {
  var e;
  return null !== (e = function(e, t) {
    if (null != e && null != t) {
      if (e.length < t) {
        let n = t - e.length;
        return e.concat(Array(n).fill(0));
      }
      return (0, _.Z)(e, t);
    }
  }(null != n ? n : [], r)) && void 0 !== e ? e : T;
}, [
  n,
  r
]);
  }(n, D), P = i.useRef(I), U = i.useRef(v), w = i.useRef(null), x = window.devicePixelRatio, {
lastBackgroundFillColor: G,
backgroundFillColor: k,
lastActiveFillColor: B,
activeFillColor: F,
lastInactiveFillColor: V,
inactiveFillColor: H
  } = function(e, t) {
let n = (0, l.useToken)(s.Z.colors.INTERACTIVE_MUTED).hex(),
  r = (0, l.useToken)(s.Z.colors.INTERACTIVE_NORMAL).hex(),
  i = (0, l.useToken)(s.Z.colors.INTERACTIVE_ACTIVE).hex(),
  a = (0, l.useToken)(s.Z.unsafe_rawColors.BRAND_430).hex(),
  o = (0, l.useToken)(s.Z.unsafe_rawColors.WHITE_500).hex(),
  u = t ? a : n,
  [c, d] = A(u, t, e),
  [_, E] = A(t ? o : e ? i : r, t, e),
  [f, h] = A(e ? u : r, t, e);
return {
  lastBackgroundFillColor: c,
  backgroundFillColor: d,
  lastActiveFillColor: _,
  activeFillColor: E,
  lastInactiveFillColor: f,
  inactiveFillColor: h
};
  }(I, v);
  i.useEffect(() => {
let e = g({
  showAll: !I,
  currentTime: a,
  duration: d,
  numSegments: M.length
});
b.current = M.map((t, n) => new E.Z(n < e ? t : 0));
  }, [M]), i.useEffect(() => {
let e = b.current;
if (null == e)
  return;
let t = g({
  showAll: !I,
  currentTime: a,
  duration: d,
  numSegments: M.length
});
for (let n = 0; n < e.length; n++) {
  let r = e[n];
  if (n < t) {
    r.animateTo(M[n]);
    continue;
  }
  r.reset();
}
  }, [
M,
a,
d,
I
  ]), i.useEffect(() => {
let e = null;
return e = requestAnimationFrame(function t(n) {
  let r = y.current,
    i = null == r ? void 0 : r.getContext('2d'),
    a = b.current;
  if (null == r || null == i || null == a)
    return;
  let o = !1;
  (P.current !== I || U.current !== v) && (P.current = I, U.current = v, w.current = n), null != w.current && n > w.current + 200 && (w.current = null);
  let s = r.height / x;
  i.clearRect(0, 0, r.width, r.height), i.beginPath();
  let [l, u] = N(G, k, n, w.current);
  o = o || u, i.fillStyle = l;
  for (let e = 0; e < M.length; e++)
    S({
      context: i,
      devicePixelRatio: x,
      canvasHeight: s,
      segmentValue: M[e],
      segmentIndex: e,
      constrainMin: !0
    });
  i.fill();
  let [c, d] = N(V, H, n, w.current);
  o = o || d;
  let [_, E] = N(B, F, n, w.current);
  o = o || E;
  for (let e = 0; e < a.length; e++) {
    let t = a[e],
      n = Math.max(t.getCurrentValue(), M[e] - 0.1);
    i.beginPath(), i.fillStyle = t.isReset ? c : _, S({
      context: i,
      devicePixelRatio: x,
      canvasHeight: s,
      segmentValue: n,
      segmentIndex: e,
      constrainMin: !t.isReset
    }), o = o || t.isAnimating(), i.fill();
  }
  o && (e = requestAnimationFrame(t));
}), () => {
  null != e && cancelAnimationFrame(e);
};
  }, [
y,
x,
M,
D,
a,
d,
I,
v,
G,
k,
B,
F,
V,
H
  ]);
  let [, Z] = (0, c.Z)({
ref: y,
onDrag: O,
onDragStart: R,
onDragEnd: C
  });
  return (0, r.jsx)('canvas', {
onMouseDown: Z,
className: o()(h.canvas, t),
style: {
  width: L
},
ref: y,
height: 32 * window.devicePixelRatio,
width: (null != D ? D : 0) * window.devicePixelRatio
  });
}