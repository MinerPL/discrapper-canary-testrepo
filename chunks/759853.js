n(47120);
var s = n(735250),
  o = n(470079),
  r = n(887024),
  a = n(338545),
  i = n(442837),
  l = n(110924),
  c = n(607070),
  d = n(819640),
  u = n(569379),
  p = n(675654),
  x = n(267925),
  m = n(197857);
let g = ['#51BC9D'];
t.Z = e => {
  var t;
  let {
quest: n,
progressBarRef: C,
isExpanded: f
  } = e, {
completionSpring: _,
startCompletionAnimation: h
  } = (0, u.GX)(), E = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, T = o.useRef(!1), S = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), N = o.useRef(null), A = (0, i.e7)([d.Z], () => d.Z.hasLayers()), v = (0, l.Z)(A), [j, B] = o.useState(null), [R, b] = o.useState(null), O = o.useRef(new r.qA({
gravity: 0,
wind: 0
  })), I = (0, r.uR)(j, R), U = o.useCallback(() => {
if (S)
  return;
let e = C.current,
  t = N.current;
if (null != t && null != e && I.isReady) {
  var n, s, o, r;
  let {
    x: a,
    y: i
  } = e.getBoundingClientRect(), {
    x: l,
    y: c
  } = t.getBoundingClientRect();
  I.createMultipleConfetti((n = a - l, s = i - c, o = e.clientHeight, r = e.clientWidth, {
    ...p.We,
    position: {
      type: 'static-random',
      minValue: {
        x: n,
        y: s
      },
      maxValue: {
        x: n + o,
        y: s + r
      }
    },
    velocity: {
      type: 'static-random',
      minValue: {
        x: -20,
        y: -20
      },
      maxValue: {
        x: 20,
        y: 20
      }
    },
    opacity: {
      type: 'linear',
      value: 2,
      addValue: -0.1
    },
    dragCoefficient: {
      type: 'static',
      value: 0.0001
    },
    size: {
      type: 'static-random',
      minValue: 2,
      maxValue: 3
    }
  }), 100);
}
  }, [
C,
N,
I,
S
  ]), M = (0, l.Z)(f);
  return (o.useEffect(() => {
E && f && !M && (h(), U());
  }, [
f,
E,
h,
U,
M
  ]), o.useEffect(() => {
E && !A && v && setTimeout(() => {
  h(), U();
}, 200);
  }, [
E,
v,
A,
h,
U
  ]), o.useEffect(() => {
if (!!I.isReady)
  !T.current && E && (h(), U()), T.current = E;
  }, [
E,
T,
U,
h,
I
  ]), S) ? null : (0, s.jsxs)('div', {
className: x.wrapper,
'aria-hidden': 'true',
ref: N,
children: [
  (0, s.jsx)(a.animated.div, {
    className: x.background,
    style: {
      opacity: _
    }
  }),
  (0, s.jsx)(r.O_, {
    ref: B,
    className: x.confetti,
    environment: O.current
  }),
  (0, s.jsx)(r.Ji, {
    ref: b,
    sprites: [m],
    colors: g,
    spriteWidth: p.Ko,
    spriteHeight: p.Ko
  })
]
  });
};