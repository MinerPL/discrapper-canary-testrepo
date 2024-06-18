"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(866442),
  l = n(481060),
  u = n(332870),
  _ = n(6829);
t.Z = e => {
  let {
    children: t,
    className: n,
    color: s,
    iconType: d,
    onMouseEnter: c,
    onMouseLeave: E,
    ...I
  } = e, [T, h] = r.useState(!1), S = r.useCallback(e => {
    h(!0), null == c || c(e)
  }, [h, c]), f = r.useCallback(e => {
    h(!1), null == E || E(e)
  }, [h, E]), N = {};
  return null != s && (N = {
    color: (0, a.Rf)(s),
    backgroundColor: T ? (0, a.br)(s, .3) : (0, a.br)(s, .1)
  }), (0, i.jsx)(l.Clickable, {
    ...I,
    tag: "span",
    className: o()(n, {
      [_.wrapper]: !0,
      interactive: I.onClick
    }),
    onMouseEnter: S,
    onMouseLeave: f,
    style: N,
    tabIndex: null != I.onClick ? 0 : -1,
    children: null != d ? (0, i.jsx)(u.Z, {
      iconType: d,
      children: t
    }) : t
  })
}