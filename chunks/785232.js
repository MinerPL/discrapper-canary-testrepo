"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("594174"),
  i = n("429239");
t.default = function(e) {
  let {
    recipients: t,
    size: n,
    status: r,
    isTyping: o,
    className: u,
    ...d
  } = e, c = (0, l.useStateFromStoresArray)([s.default], () => t.slice(0, 2).map(e => {
    let t = s.default.getUser(e);
    if (null != t) return t.getAvatarURL(void 0, n, !1)
  }), [t, n]);
  return (0, a.jsx)(i.default, {
    "aria-label": d["aria-label"],
    "aria-hidden": d["aria-hidden"],
    backSrc: c[0],
    frontSrc: c[1],
    size: n,
    status: r,
    isTyping: null != o && o,
    className: u
  })
}