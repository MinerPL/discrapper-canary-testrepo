n.d(t, {
  Z: function() {
return C;
  }
}), n(47120), n(724458);
var s = n(735250),
  o = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(392711),
  i = n.n(l),
  c = n(442837),
  d = n(481060),
  u = n(451478),
  p = n(302221),
  x = n(869448);
let m = [
0,
0.5,
1
  ],
  g = {
'layers[1].shapes[1].g.k.k': [
  0,
  0.522,
  0.278,
  0.776,
  0.5,
  0.522,
  0.278,
  0.776,
  1,
  0.522,
  0.278,
  0.776
],
'layers[2].shapes[1].g.k.k': [
  0,
  0.714,
  0.271,
  0.757,
  0.5,
  0.714,
  0.271,
  0.757,
  1,
  0.714,
  0.271,
  0.757
]
  };
async function _(e, t) {
  let s = (await n.e('30166').then(n.t.bind(n, 235630, 19))).default;
  return function(e, t, n) {
for (let s in t) {
  let t = i().get(e, s);
  if (null == t)
    continue;
  let o = t.map((e, t) => {
    var s;
    return null !== (s = n[t]) && void 0 !== s ? s : e;
  });
  i().set(e, s, o);
}
  }(s, g, t), s;
}

function C(e) {
  var t;
  let {
animationClassName: n,
className: a,
quest: l,
useReducedMotion: i
  } = e, g = (0, c.e7)([u.Z], () => u.Z.isFocused()), C = o.useRef(null), [f, h] = o.useState(!1), E = o.useMemo(() => {
if (null == l)
  return null;
let e = (0, p.oo)(l.config.colors.primary),
  t = {
    r: e.r / 255,
    g: e.g / 255,
    b: e.b / 255
  },
  n = m.reduce((e, n) => [
    ...e,
    n,
    t.r,
    t.g,
    t.b
  ], []);
return _(l.id, n);
  }, [l]), T = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, S = !i && g;
  o.useEffect(() => {
var e, t, n, s;
g ? S && (null === (s = C.current) || void 0 === s || null === (n = s.animation) || void 0 === n || n.play()) : null === (t = C.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0);
  }, [
S,
g
  ]);
  let v = o.useCallback(() => {
h(!0);
  }, []);
  return null == E || T ? (0, s.jsx)('div', {
className: x.backgroundFallback,
style: {
  backgroundImage: 'linear-gradient(90deg, '.concat(l.config.colors.primary, ', ').concat(l.config.colors.secondary, ')')
}
  }) : (0, s.jsx)('div', {
className: r()(x.lottieAnimationBackgroundWrapper, a),
children: (0, s.jsx)(d.LottieAnimation, {
  ref: C,
  onComplete: v,
  importData: () => E,
  shouldAnimate: !f && S,
  className: r()(x.lottieAnimation, x.lottieAnimationBackground, n),
  loop: 0,
  rendererSettings: {
    preserveAspectRatio: 'none'
  }
}, l.config.colors.primary)
  });
}