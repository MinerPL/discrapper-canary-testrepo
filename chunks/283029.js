"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  i = s("594787");
t.default = function(e) {
  let {
    className: t,
    imageClassName: n,
    boostInCooldown: r,
    useReducedMotion: o
  } = e;
  return (0, a.jsx)("div", {
    className: l()(i.imageWrapper, t, {
      [i.cooldown]: r
    }),
    children: (0, a.jsx)("img", {
      className: l()(i.image, n, {
        [i.cooldownImage]: r
      }),
      src: r ? s("971149") : o ? s("908635") : s("83957"),
      alt: ""
    })
  })
}