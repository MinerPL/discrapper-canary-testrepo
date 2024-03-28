"use strict";
t.r(a);
var l = t("735250");
t("470079");
var i = t("718017"),
  n = t("399606"),
  r = t("607070");
a.default = e => {
  let {
    children: a,
    initTranslate3d: t
  } = e, s = (0, n.useStateFromStores)([r.default], () => r.default.useReducedMotion), o = (0, i.useSpring)({
    immediate: s,
    from: {
      transform: t
    },
    to: {
      transform: "translate3d(0, 0, 0)"
    }
  });
  return (0, l.jsx)(i.animated.div, {
    style: o,
    children: a
  })
}