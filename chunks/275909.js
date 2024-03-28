"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  i = s("283029"),
  r = s("380711");
t.default = function(e) {
  let {
    className: t,
    hasCooldown: n,
    isCanceled: o,
    useReducedMotion: d
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(r.boostIconContainer, t),
    children: [o ? (0, a.jsx)("img", {
      className: l()(r.boostIcon, r.boostIconCanceled),
      src: s("457026"),
      alt: ""
    }) : (0, a.jsx)(i.default, {
      className: r.boostIcon,
      boostInCooldown: n,
      useReducedMotion: d
    }), !o && n && (0, a.jsx)("img", {
      className: r.snowflake,
      src: s("765028"),
      alt: ""
    })]
  })
}