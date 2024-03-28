"use strict";
i.r(t), i("47120");
var a = i("735250"),
  l = i("470079"),
  n = i("803997"),
  s = i.n(n),
  r = i("718017"),
  o = i("442837"),
  d = i("481060"),
  c = i("393238"),
  u = i("607070"),
  f = i("689938"),
  m = i("797332");
t.default = l.memo(function(e) {
  let {
    renderHeader: t,
    children: i,
    isExpanded: n,
    isStuck: E,
    onExpand: I
  } = e, x = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [h, T] = l.useState(!0), [M, F] = l.useState(!1), {
    ref: _,
    height: v = 0
  } = (0, c.default)(), {
    ref: R,
    height: p = 0
  } = (0, c.default)(), [C, N] = l.useState(n), g = (0, r.useSpring)({
    height: C ? p + v : v,
    immediate: h || x,
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    onStart: () => {
      F(!1)
    },
    onRest: () => {
      F(!0)
    }
  });
  l.useLayoutEffect(() => {
    F(!1), N(n)
  }, [n]);
  let [j, L] = l.useState(!1), y = () => {
    L(!1)
  };
  return l.useLayoutEffect(() => {
    let e = setTimeout(() => {
      T(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, a.jsx)(d.Clickable, {
    className: s()(m.editCard, {
      [m.toggled]: n,
      [m.active]: j
    }),
    onMouseLeave: y,
    onMouseDown: () => {
      L(!0)
    },
    onMouseUp: y,
    children: (0, a.jsxs)(r.animated.div, {
      className: s()(m.contentExpandContainer, {
        [m.showOverflow]: n && M
      }),
      style: g,
      children: [(0, a.jsx)(d.Clickable, {
        innerRef: _,
        onClick: E ? void 0 : I,
        className: s()(m.innerHeader, {
          [m.toggled]: n && E
        }),
        "aria-label": f.default.Messages.EXPAND,
        children: t
      }), (0, a.jsx)("div", {
        ref: R,
        children: i
      })]
    })
  })
})