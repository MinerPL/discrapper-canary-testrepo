"use strict";
n.r(t), n("653041");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("613828"),
  o = n("481060"),
  u = n("624138"),
  d = n("704053");
let c = [18, 18, 16, 16, 14, 12, 10];
t.default = e => {
  let t, n, {
      children: s,
      icon: f,
      name: h,
      ariaLabel: C,
      className: p,
      style: m,
      to: g,
      onClick: E,
      selected: S = !1,
      ..._
    } = e,
    I = (0, r.useHistory)();
  if (null == f && null != h) {
    var N;
    n = null !== (N = c[(t = (0, u.getAcronym)(h)).length - 1]) && void 0 !== N ? N : c[c.length - 1]
  }
  let T = a.useCallback(e => {
    if (null == g);
    else if ("string" == typeof g) I.push(g);
    else {
      let {
        pathname: e = "",
        state: t
      } = g;
      I.push(e, t)
    }
    null != E && E(e)
  }, [I, g, E]);
  return (0, l.jsxs)(o.Clickable, {
    ..._,
    onClick: T,
    className: i()(p, d.wrapper, {
      [d.selected]: S
    }),
    "aria-label": null != C && "" !== C ? C : null != h ? h : "",
    style: {
      ...m,
      fontSize: n
    },
    focusProps: {
      enabled: !1
    },
    children: [null != t ? (0, l.jsx)("div", {
      className: i()(d.childWrapper, d.acronym),
      "aria-hidden": !0,
      children: t
    }) : null, null != f ? (0, l.jsx)("img", {
      className: d.icon,
      src: f,
      alt: " ",
      width: 48,
      height: 48,
      "aria-hidden": !0
    }) : null, null != s ? (0, l.jsx)("div", {
      className: d.childWrapper,
      children: s
    }) : null]
  })
}