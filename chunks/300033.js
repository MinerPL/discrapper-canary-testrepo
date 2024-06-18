"use strict";
n.d(t, {
  R: function() {
    return l
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(607070);

function l(e) {
  let {
    animationData: t,
    className: n
  } = e, [l, u] = (0, r.useState)(0), _ = (0, s.e7)([a.Z], () => a.Z.useReducedMotion);
  return (0, r.useEffect)(() => {
    let e = l + 1;
    e < t.length && t[e]()
  }, [l, t]), (0, i.jsx)(o.LottieAnimation, {
    importData: t[l],
    className: n,
    shouldAnimate: !_,
    versionKey: l,
    onComplete: () => {
      l < t.length - 1 && u(l + 1)
    },
    loop: l === t.length - 1
  })
}