"use strict";
n.r(t), n("653041");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("613828"),
  o = n("481060"),
  u = n("624138"),
  d = n("628663");
let c = [18, 18, 16, 16, 14, 12, 10];

function f(e, t) {
  return i()({
    [d.childWrapper]: !0,
    [d.childWrapperNoHoverBg]: "always" === e,
    [d.childWrapperHoverScale]: "on-hover" === e && t
  })
}
t.default = e => {
  let t, n, {
      backgroundStyle: s = "always",
      children: h,
      icon: p,
      name: m,
      ariaLabel: C,
      className: g,
      style: E,
      to: _,
      onClick: S,
      selected: I = !1,
      ...N
    } = e,
    T = (0, r.useHistory)();
  if (null == p && null != m) {
    var A;
    n = null !== (A = c[(t = (0, u.getAcronym)(m)).length - 1]) && void 0 !== A ? A : c[c.length - 1]
  }
  let L = a.useCallback(e => {
    if (null == _);
    else if ("string" == typeof _) T.push(_);
    else {
      let {
        pathname: e = "",
        state: t
      } = _;
      T.push(e, t)
    }
    null != S && S(e)
  }, [T, _, S]);
  return (0, l.jsxs)(o.Clickable, {
    ...N,
    onClick: L,
    className: i()(g, d.wrapper, {
      [d.selected]: I
    }),
    "aria-label": null != C && "" !== C ? C : null != m ? m : "",
    style: {
      ...E,
      fontSize: n
    },
    focusProps: {
      enabled: !1
    },
    children: [null != t ? (0, l.jsx)("div", {
      className: i()(f(s, !1), d.acronym),
      "aria-hidden": !0,
      children: t
    }) : null, null != p ? (0, l.jsx)("img", {
      className: d.icon,
      src: p,
      alt: " ",
      width: 48,
      height: 48,
      "aria-hidden": !0
    }) : null, null != h ? (0, l.jsx)("div", {
      className: f(s, !0),
      children: h
    }) : null]
  })
}