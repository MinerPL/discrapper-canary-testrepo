n(47120), n(177593);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(338545),
  o = n(442837),
  c = n(481060),
  u = n(393238),
  d = n(607070),
  h = n(44315),
  p = n(314897),
  m = n(111583),
  _ = n(889901),
  f = n(64078),
  E = n(351780),
  g = n(843693),
  C = n(641033),
  I = n(989830),
  x = n(689938),
  T = n(934376);
let N = a.memo(function(e) {
let {
  channelId: t,
  width: n
} = e, s = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), l = (0, o.e7)([g.ZP], () => g.ZP.getMostRecentMessageCombo(t), [t]), [u, h] = a.useState(!1);
a.useEffect(() => {
  if (null == l ? void 0 : l.displayed)
    return;
  h(!1), setImmediate(() => {
    h((null != l ? (0, C.Eo)(l.combo) : 0) > 0);
  });
  let e = setTimeout(() => {
    h(!1), null != l && (0, f.ew)(l);
  }, 2000);
  return () => clearTimeout(e);
}, [l]);
let p = null != l ? '100%' : '200%',
  m = (0, c.useSpring)({
    opacity: u ? 1 : 0,
    translateY: u ? '0' : p,
    pointerEvents: 'none',
    width: n,
    config: s ? r.config.stiff : r.config.slow
  }, 'animate-always');
return (0, i.jsx)(i.Fragment, {
  children: null != l && (0, i.jsx)(r.animated.div, {
    className: T.messageComboScore,
    style: m,
    children: (0, i.jsx)(c.Text, {
      className: T.comboScore,
      variant: 'text-sm/bold',
      children: (0, C.Eo)(l.combo)
    })
  })
});
  }),
  v = a.memo(function(e) {
let {
  value: t,
  multiplier: n
} = e, {
  color: s,
  square: r,
  flair: o
} = a.useMemo(() => (0, C.yz)(n), [n]), u = (0, h.Lq)(s);
return (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)(c.Text, {
      className: T.comboValue,
      variant: 'text-sm/bold',
      children: t
    }),
    (0, i.jsxs)('div', {
      className: T.comboNameplate,
      style: {
        color: u
      },
      children: [
        (0, i.jsx)(c.Text, {
          className: T.comboMultiplier,
          style: {
            color: u
          },
          variant: 'text-sm/bold',
          children: x.Z.Messages.POGGERMODE_COMBO.format({
            multiplier: n
          })
        }),
        r && (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)('div', {
              className: l()(T.comboSquare, T.left),
              style: {
                backgroundColor: u
              }
            }),
            (0, i.jsx)('div', {
              className: l()(T.comboSquare, T.right),
              style: {
                backgroundColor: u
              }
            })
          ]
        }),
        o && (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)('div', {
              className: l()(T.confettiIcon, T.left),
              children: (0, i.jsx)(_.Z, {
                width: 24,
                height: 24
              })
            }),
            (0, i.jsx)('div', {
              className: l()(T.confettiIcon, T.right),
              children: (0, i.jsx)(_.Z, {
                width: 24,
                height: 24
              })
            })
          ]
        }),
        1 === n && (0, i.jsx)(c.Text, {
          className: T.tip,
          variant: 'text-sm/bold',
          children: x.Z.Messages.POGGERMODE_COMBO_TIP
        })
      ]
    })
  ]
});
  });
t.Z = a.memo(function(e) {
  let {
channelId: t
  } = e, n = (0, o.e7)([p.default], () => p.default.getId()), s = (0, o.e7)([m.Z], () => m.Z.isTyping(t, n), [
t,
n
  ]), l = (0, o.e7)([E.Z], () => E.Z.isEnabled()), d = (0, o.e7)([g.ZP], () => g.ZP.isComboing(n, t), [
t,
n
  ]), {
ref: h,
width: _ = 0
  } = (0, u.Z)(), [f, C] = a.useState(!1), x = (0, I.Z)(t), S = l && d && s;
  a.useEffect(() => {
S && C(!0);
let e = setTimeout(() => C(S), 1000);
return () => clearTimeout(e);
  }, [S]);
  let Z = (0, c.useSpring)({
  opacity: f ? 1 : 0,
  transform: f ? 'translateY(0)' : 'translateY(100%)',
  pointerEvents: 'none',
  config: r.config.stiff
}),
A = a.useMemo(() => null != x ? x : {
  value: 0,
  multiplier: 1
}, [x]),
M = a.useRef(A);
  a.useEffect(() => {
(A.multiplier > 1 || A.value > 0) && (M.current = A);
  }, [A]);
  let {
multiplier: b,
value: R
  } = a.useMemo(() => ({
value: S ? A.value : M.current.value,
multiplier: S ? A.multiplier : M.current.multiplier
  }), [
S,
A,
M
  ]);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(N, {
    channelId: t,
    width: _
  }),
  (0, i.jsx)(r.animated.div, {
    ref: h,
    className: T.combo,
    style: Z,
    children: (0, i.jsx)(v, {
      value: R,
      multiplier: b
    })
  })
]
  });
});