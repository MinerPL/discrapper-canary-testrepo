"use strict";
n.r(t), n("47120"), n("177593");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("718017"),
  o = n("442837"),
  u = n("481060"),
  d = n("393238"),
  c = n("607070"),
  f = n("44315"),
  h = n("314897"),
  m = n("111583"),
  p = n("889901"),
  E = n("64078"),
  C = n("351780"),
  g = n("843693"),
  S = n("641033"),
  _ = n("989830"),
  T = n("689938"),
  I = n("748274");
let A = l.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, s = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), i = (0, o.useStateFromStores)([g.default], () => g.default.getMostRecentMessageCombo(t), [t]), [d, f] = l.useState(!1);
    l.useEffect(() => {
      if (null == i ? void 0 : i.displayed) return;
      f(!1), setImmediate(() => {
        f((null != i ? (0, S.getComboScore)(i.combo) : 0) > 0)
      });
      let e = setTimeout(() => {
        f(!1), null != i && (0, E.clearMessageCombo)(i)
      }, 2e3);
      return () => clearTimeout(e)
    }, [i]);
    let h = (0, r.useSpring)({
      opacity: d ? 1 : 0,
      translateY: d ? "0" : null != i ? "100%" : "200%",
      pointerEvents: "none",
      width: n,
      config: s ? r.config.stiff : r.config.slow
    });
    return (0, a.jsx)(a.Fragment, {
      children: null != i && (0, a.jsx)(r.animated.div, {
        className: I.messageComboScore,
        style: h,
        children: (0, a.jsx)(u.Text, {
          className: I.comboScore,
          variant: "text-sm/bold",
          children: (0, S.getComboScore)(i.combo)
        })
      })
    })
  }),
  v = l.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: s,
      square: r,
      flair: o
    } = l.useMemo(() => (0, S.getComboStyles)(n), [n]), d = (0, f.getColor)(s);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.Text, {
        className: I.comboValue,
        variant: "text-sm/bold",
        children: t
      }), (0, a.jsxs)("div", {
        className: I.comboNameplate,
        style: {
          color: d
        },
        children: [(0, a.jsx)(u.Text, {
          className: I.comboMultiplier,
          style: {
            color: d
          },
          variant: "text-sm/bold",
          children: T.default.Messages.POGGERMODE_COMBO.format({
            multiplier: n
          })
        }), r && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            className: i()(I.comboSquare, I.left),
            style: {
              backgroundColor: d
            }
          }), (0, a.jsx)("div", {
            className: i()(I.comboSquare, I.right),
            style: {
              backgroundColor: d
            }
          })]
        }), o && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            className: i()(I.confettiIcon, I.left),
            children: (0, a.jsx)(p.default, {
              width: 24,
              height: 24
            })
          }), (0, a.jsx)("div", {
            className: i()(I.confettiIcon, I.right),
            children: (0, a.jsx)(p.default, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, a.jsx)(u.Text, {
          className: I.tip,
          variant: "text-sm/bold",
          children: T.default.Messages.POGGERMODE_COMBO_TIP
        })]
      })]
    })
  });
t.default = l.memo(function(e) {
  let {
    channelId: t
  } = e, n = (0, o.useStateFromStores)([h.default], () => h.default.getId()), s = (0, o.useStateFromStores)([m.default], () => m.default.isTyping(t, n), [t, n]), i = (0, o.useStateFromStores)([C.default], () => C.default.isEnabled()), u = (0, o.useStateFromStores)([g.default], () => g.default.isComboing(n, t), [t, n]), {
    ref: f,
    width: p = 0
  } = (0, d.default)(), E = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [S, T] = l.useState(!1), N = (0, _.default)(t), x = i && u && s;
  l.useEffect(() => {
    x && T(!0);
    let e = setTimeout(() => T(x), 1e3);
    return () => clearTimeout(e)
  }, [x]);
  let M = (0, r.useSpring)({
      opacity: S ? 1 : 0,
      transform: S ? "translateY(0)" : "translateY(100%)",
      pointerEvents: "none",
      config: r.config.stiff,
      immediate: E
    }),
    R = l.useMemo(() => null != N ? N : {
      value: 0,
      multiplier: 1
    }, [N]),
    L = l.useRef(R);
  l.useEffect(() => {
    (R.multiplier > 1 || R.value > 0) && (L.current = R)
  }, [R]);
  let {
    multiplier: y,
    value: O
  } = l.useMemo(() => ({
    value: x ? R.value : L.current.value,
    multiplier: x ? R.multiplier : L.current.multiplier
  }), [x, R, L]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(A, {
      channelId: t,
      width: p
    }), (0, a.jsx)(r.animated.div, {
      ref: f,
      className: I.combo,
      style: M,
      children: (0, a.jsx)(v, {
        value: O,
        multiplier: y
      })
    })]
  })
})