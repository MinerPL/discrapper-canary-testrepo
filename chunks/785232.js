"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("594174"),
  r = n("429239");
t.default = function(e) {
  let {
    recipients: t,
    size: n,
    status: o,
    isTyping: u,
    className: d,
    ...c
  } = e, f = s.AvatarSizeSpecs[n], h = (0, l.useStateFromStoresArray)([i.default], () => t.slice(0, 2).map(e => {
    let t = i.default.getUser(e);
    if (null != t) return t.getAvatarURL(void 0, f.size, !1)
  }), [t, f.size]);
  return (0, a.jsx)(r.default, {
    "aria-label": c["aria-label"],
    "aria-hidden": c["aria-hidden"],
    backSrc: h[0],
    frontSrc: h[1],
    size: n,
    status: o,
    isTyping: null != u && u,
    className: d
  })
}