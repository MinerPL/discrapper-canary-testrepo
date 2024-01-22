"use strict";
n.r(t), n.d(t, {
  Collapsible: function() {
    return f
  }
}), n("222007");
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("907002"),
  l = n("446674"),
  u = n("731898"),
  d = n("206230"),
  c = n("236685");

function f(e) {
  let {
    children: t,
    className: n,
    collapsibleContent: r,
    isExpanded: f
  } = e, [_, h] = s.useState(!1), g = (0, l.useStateFromStores)([d.default], () => d.default.useReducedMotion), [m, E] = s.useState(!0), [p, v] = s.useState(!1), S = null != f ? f : _, {
    ref: T,
    height: I = 0
  } = (0, u.default)(), {
    ref: C,
    height: A = 0
  } = (0, u.default)(), y = (0, o.useSpring)({
    height: S ? I + A : A,
    immediate: m || g,
    config: o.config.stiff,
    onRest: () => v(!0)
  }), N = s.useCallback(() => {
    h(!_)
  }, [_, h]);
  return s.useLayoutEffect(() => {
    let e = setTimeout(() => {
      E(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, i.jsx)("div", {
    className: a(c.collapseable, {
      [c.toggled]: S
    }, n),
    children: (0, i.jsxs)(o.animated.div, {
      className: a(c.contentExpandContainer, {
        [c.showOverflow]: S && p
      }),
      style: y,
      children: [(0, i.jsx)("div", {
        ref: C,
        className: a(c.header, {
          [c.toggled]: S
        }),
        children: t({
          onClick: N
        })
      }), (0, i.jsx)("div", {
        ref: T,
        children: r
      })]
    })
  })
}