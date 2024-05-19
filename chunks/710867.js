"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("293335"),
  a = n("935689");
t.default = e => {
  let {
    profileEffectConfig: t,
    onReady: n
  } = e, {
    pendingRef: s,
    setPending: o
  } = (0, r.default)(t.effects, n);
  return (0, i.jsx)("div", {
    className: a.profileEffects,
    children: (0, i.jsx)("div", {
      className: a.inner,
      children: t.effects.map(e => (0, i.jsx)("img", {
        src: e.src,
        alt: "Preload Profile Effect Asset",
        "aria-hidden": !0,
        style: {
          opacity: 0,
          position: "absolute"
        },
        onLoad: () => {
          o(s.current - 1), s.current = s.current - 1
        }
      }, e.src))
    })
  })
}