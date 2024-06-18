"use strict";
n.d(t, {
  L: function() {
    return E
  }
}), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(266067),
  l = n(481060),
  u = n(624138),
  _ = n(282360);
let d = [18, 18, 16, 16, 14, 12, 10];

function c(e, t) {
  return o()({
    [_.childWrapper]: !0,
    [_.childWrapperNoHoverBg]: "always" === e,
    [_.childWrapperHoverScale]: "on-hover" === e && t
  })
}
let E = e => {
  let t, n, {
      backgroundStyle: s = "always",
      children: E,
      icon: I,
      name: T,
      ariaLabel: h,
      className: S,
      style: f,
      to: N,
      onClick: A,
      selected: m = !1,
      ...O
    } = e,
    R = (0, a.k6)();
  if (null == I && null != T) {
    var C;
    n = null !== (C = d[(t = (0, u.Zg)(T)).length - 1]) && void 0 !== C ? C : d[d.length - 1]
  }
  let p = r.useCallback(e => {
    if (null == N);
    else if ("string" == typeof N) R.push(N);
    else {
      let {
        pathname: e = "",
        state: t
      } = N;
      R.push(e, t)
    }
    null != A && A(e)
  }, [R, N, A]);
  return (0, i.jsxs)(l.Clickable, {
    ...O,
    onClick: p,
    className: o()(S, _.wrapper, {
      [_.selected]: m
    }),
    "aria-label": null != h && "" !== h ? h : null != T ? T : "",
    style: {
      ...f,
      fontSize: n
    },
    focusProps: {
      enabled: !1
    },
    children: [null != t ? (0, i.jsx)("div", {
      className: o()(c(s, !1), _.acronym),
      "aria-hidden": !0,
      children: t
    }) : null, null != I ? (0, i.jsx)("img", {
      className: _.icon,
      src: I,
      alt: " ",
      width: 48,
      height: 48,
      "aria-hidden": !0
    }) : null, null != E ? (0, i.jsx)("div", {
      className: c(s, !0),
      children: E
    }) : null]
  })
}