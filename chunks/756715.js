"use strict";
n.d(t, {
  e: function() {
    return E
  }
}), n(411104);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(532712),
  l = n(1561),
  u = n(84735),
  _ = n(335854),
  d = n(645499),
  c = n(433426);

function E(e) {
  let {
    href: t,
    onClick: n,
    className: s,
    children: E,
    rel: I,
    target: T,
    useDefaultUnderlineStyles: h = !0,
    title: S,
    style: f,
    focusProps: N,
    ...A
  } = e;
  null != t && null == n && (n = _.X.getDefaultLinkInterceptor(t));
  let m = r.useContext(a.g),
    O = {
      className: o()(c.anchor, {
        [c.anchorUnderlineOnHover]: h
      }, s),
      href: t,
      onClick: n,
      rel: null != I ? I : void 0,
      target: null != T ? T : void 0,
      title: null != S ? S : void 0,
      style: null != f ? f : void 0
    };
  return (null != t && !(0, d.B)(t) && (O.rel = "noreferrer noopener", O.target = "_blank"), m && delete O.href, null != n) ? (0, i.jsx)(l.P, {
    tag: "a",
    ...A,
    ...O,
    onClick: n,
    focusProps: N,
    children: E
  }) : (0, i.jsx)(u.t, {
    ...N,
    children: (0, i.jsx)("a", {
      ...A,
      ...O,
      children: E
    })
  })
}