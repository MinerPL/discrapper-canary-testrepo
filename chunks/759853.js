n(47120);
var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(887024),
  i = n(699581),
  c = n(338545),
  d = n(442837),
  u = n(110924),
  p = n(607070),
  m = n(819640),
  x = n(569379),
  g = n(675654),
  f = n(267925),
  C = n(197857);
let _ = ['#51BC9D'];
t.Z = e => {
  var t;
  let {
expansionSpring: n,
overlayRef: r,
quest: h,
progressBarRef: E,
isExpanded: S
  } = e, {
completionSpring: T,
startCompletionAnimation: v
  } = (0, x.GX)(), N = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, j = o.useRef(!1), A = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), B = o.useRef(null), b = (0, d.e7)([m.Z], () => m.Z.hasLayers()), R = (0, u.Z)(b), [y, I] = o.useState(null), [O, q] = o.useState(null), U = o.useRef(new l.qA({
gravity: 0,
wind: 0
  })), k = (0, l.uR)(y, O), M = o.useCallback(() => {
if (A)
  return;
let e = E.current,
  t = B.current;
if (null != t && null != e && k.isReady) {
  var n, s, o, r;
  let {
    x: a,
    y: l
  } = e.getBoundingClientRect(), {
    x: i,
    y: c
  } = t.getBoundingClientRect();
  k.createMultipleConfetti((n = a - i, s = l - c, o = e.clientHeight, r = e.clientWidth, {
    ...g.We,
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
E,
B,
k,
A
  ]), P = (0, u.Z)(S);
  return (o.useEffect(() => {
N && S && !P && (v(), M());
  }, [
S,
N,
v,
M,
P
  ]), o.useEffect(() => {
N && !b && R && setTimeout(() => {
  v(), M();
}, 200);
  }, [
N,
R,
b,
v,
M
  ]), o.useEffect(() => {
if (!!k.isReady)
  !j.current && N && (v(), M()), j.current = N;
  }, [
N,
j,
M,
v,
k
  ]), A) ? null : (0, s.jsxs)('div', {
className: f.wrapper,
'aria-hidden': 'true',
ref: B,
children: [
  (0, s.jsx)(c.animated.div, {
    className: f.background,
    style: {
      opacity: T
    }
  }),
  (0, s.jsx)(c.animated.div, {
    className: a()(f.borders, f.bordersTopLeft),
    style: {
      opacity: T
    }
  }),
  (0, s.jsxs)(c.animated.div, {
    className: f.confettiWrapper,
    style: {
      transform: n.to({
        range: [
          0,
          1
        ],
        output: [
          -35,
          0
        ]
      }).to(e => 'translateY('.concat(e, 'px)'))
    },
    children: [
      (0, s.jsx)(l.O_, {
        ref: I,
        className: f.confetti,
        environment: U.current
      }),
      (0, s.jsx)(l.Ji, {
        ref: q,
        sprites: [C],
        colors: _,
        spriteWidth: g.Ko,
        spriteHeight: g.Ko
      }),
      null != r.current && (0, i.createPortal)((0, s.jsx)(c.animated.div, {
        className: a()(f.borders, f.bordersBottom),
        style: {
          opacity: T
        }
      }), r.current)
    ]
  })
]
  });
};