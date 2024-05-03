"use strict";
n.r(t), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  l = n("718017"),
  o = n("442837"),
  c = n("481060"),
  d = n("393238"),
  u = n("607070"),
  f = n("689938"),
  m = n("532136");
t.default = i.memo(function(e) {
  let {
    renderHeader: t,
    children: n,
    isExpanded: r,
    isStuck: h,
    onExpand: E,
    disableAnimation: T,
    disableBackground: p
  } = e, _ = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [C, g] = i.useState(!0), [x, I] = i.useState(!1), {
    ref: v,
    height: N = 0
  } = (0, d.default)(), {
    ref: S,
    height: A = 0
  } = (0, d.default)(), [R, M] = i.useState(r), L = (0, l.useSpring)({
    height: R ? A + N : N,
    immediate: C || _ || T,
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    onStart: () => {
      I(!1)
    },
    onRest: () => {
      I(!0)
    }
  });
  return i.useLayoutEffect(() => {
    I(!1), M(r)
  }, [r]), i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      g(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, a.jsx)(c.Clickable, {
    className: s()(m.editCard, {
      [m.toggled]: r,
      [m.noBackground]: p
    }),
    children: (0, a.jsxs)(l.animated.div, {
      className: s()(m.contentExpandContainer, {
        [m.showOverflow]: r && x
      }),
      style: L,
      children: [(0, a.jsx)(c.Clickable, {
        innerRef: v,
        onClick: h ? void 0 : E,
        className: s()(m.innerHeader, {
          [m.toggled]: r && h
        }),
        "aria-label": f.default.Messages.EXPAND,
        children: t
      }), (0, a.jsx)("div", {
        ref: S,
        children: n
      })]
    })
  })
})