"use strict";
var i = n(735250);
n(470079);
var r = n(293335),
  s = n(935689);
t.Z = e => {
  let {
    profileEffectConfig: t,
    onReady: n
  } = e, {
    pendingRef: o,
    setPending: a
  } = (0, r.Z)(t.effects, n);
  return (0, i.jsx)("div", {
    className: s.profileEffects,
    children: (0, i.jsx)("div", {
      className: s.inner,
      children: t.effects.map(e => (0, i.jsx)("img", {
        src: e.src,
        alt: "Preload Profile Effect Asset",
        "aria-hidden": !0,
        style: {
          opacity: 0,
          position: "absolute"
        },
        onLoad: () => {
          a(o.current - 1), o.current = o.current - 1
        }
      }, e.src))
    })
  })
}