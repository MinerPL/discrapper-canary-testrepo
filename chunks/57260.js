"use strict";
n.d(t, {
  z: function() {
    return c
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(442837),
  u = n(393238),
  _ = n(607070),
  d = n(392767);

function c(e) {
  let {
    children: t,
    className: n,
    collapsibleContent: s,
    isExpanded: c
  } = e, [E, I] = r.useState(!1), T = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), [h, S] = r.useState(!0), [f, N] = r.useState(!1), A = null != c ? c : E, {
    ref: m,
    height: O = 0
  } = (0, u.Z)(), {
    ref: R,
    height: C = 0
  } = (0, u.Z)(), p = (0, a.useSpring)({
    height: A ? O + C : C,
    immediate: h || T,
    config: a.config.stiff,
    onRest: () => N(!0)
  }), g = r.useCallback(() => {
    I(!E)
  }, [E, I]);
  return r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      S(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, i.jsx)("div", {
    className: o()(d.collapseable, {
      [d.toggled]: A
    }, n),
    children: (0, i.jsxs)(a.animated.div, {
      className: o()(d.contentExpandContainer, {
        [d.showOverflow]: A && f
      }),
      style: p,
      children: [(0, i.jsx)("div", {
        ref: R,
        className: o()(d.header, {
          [d.toggled]: A
        }),
        children: t({
          onClick: g
        })
      }), (0, i.jsx)("div", {
        ref: m,
        children: s
      })]
    })
  })
}